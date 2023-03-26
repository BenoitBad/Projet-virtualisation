from flask import Flask,request
from flask_cors import CORS
from player import Player
from morpion import Morpion
from flask_socketio import SocketIO
from gameState import GameState
from random import randint

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app,cors_allowed_origins="*")
morpion = Morpion()

if __name__ == '__main__':
    socketio.run(app)


@socketio.on('getMorpionGrid')
def getMorpionGrid():
    socketio.emit('updateMorpion',morpion.getGrid())
    return '',morpion.getGrid()

@socketio.on('registerPlayer')
def register(json):
    player = Player.fromJson(json)
    canAdd = morpion.addPlayer(player)
    if not canAdd:
        socketio.emit('gameState',GameState.Full,room=request.sid)
        return '',401
    socketio.emit('playerId',morpion.totalPlayer()-1,room=request.sid)
    if (morpion.totalPlayer() < 2):
        socketio.emit('gameState',GameState.Waiting,room=request.sid)
        return 
    
    morpion.currentPlaying = randint(0,1)
    socketio.emit('opponent',GameState.Start)
    socketio.emit('gameState',GameState.Start)
    socketio.emit('playerTurn',morpion.currentPlaying)
    return '',200

@socketio.on('play')
def onPlay(json):
    x,y,player = json["x"], json["y"], Player.fromJson(json["player"])
    legalPosition = morpion.play(x,y,player.side)
    if (not legalPosition):
        return
    morpion.currentPlaying = (morpion.currentPlaying + 1)%2
    socketio.emit('playerTurn',morpion.currentPlaying)
    socketio.emit('updateMorpion',morpion.getGrid())
    print(morpion.getGrid())
    print(json)
    return '',200
