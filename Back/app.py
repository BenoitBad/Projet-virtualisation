from flask import Flask,request
from flask_cors import CORS
from player import Player
from morpion import Morpion
from flask_socketio import SocketIO
from gameState import GameState
from random import randint
from client import Client
import time
app = Flask(__name__)
CORS(app)
socketio = SocketIO(app,cors_allowed_origins="*")
waitingList = dict()
morpion = Morpion()

if __name__ == '__main__':
    socketio.run(app)
@socketio.on('connect')
def handle_connect():
    waitingList[request.sid] = Client(request.sid,socketio)

@socketio.on('getMorpionGrid')
def getMorpionGrid():
    socketio.emit('updateMorpion',morpion.getGrid())
    return '',morpion.getGrid()

def emitOpponent():
    client1 = morpion.getPlayer(0)
    client2 = morpion.getPlayer(1)
    client1.emit('opponent',client2.player.toJson())
    client2.emit('opponent',client1.player.toJson())


@socketio.on('registerPlayer')
def register(json):
    player, client = Player.fromJson(json) , waitingList[request.sid]
    client.associatePlayer(player)
    canAdd = morpion.addPlayer(client)
    if not canAdd:
        client.emit('gameState',GameState.Full)
        return '',401
    socketio.emit('playerId',morpion.totalPlayer()-1,room=request.sid)
    if (morpion.totalPlayer() < 2):
        client.emit('gameState',GameState.Waiting)
        return 
    morpion.currentPlaying = randint(0,1)

    emitOpponent()
    socketio.emit('gameState',GameState.Start)
    socketio.emit('playerTurn',morpion.currentPlaying)
    return '',200


@socketio.on('play')
def onPlay(json):
    x,y,client = json["x"], json["y"], morpion.getPlayer(json["playerId"])
    print("called")
    legalPosition = morpion.play(x,y,client.player.side)

    if (not legalPosition):
        print("notLegal")
        return
    if (morpion.checkWin(client.player.side)):
        client.emit('gameState',GameState.Win)
        morpion.getPlayer(json["playerId"] + (morpion.currentPlaying + 1)%2).emit('gameState',GameState.Lose)
        morpion.reset()
        time.sleep(5)
        socketio.emit("gameState",GameState.Registration)
        return
    
    if (morpion.checkDraw()):
        client.emit('gameState',GameState.Draw)
        morpion.getPlayer(json["playerId"] + (morpion.currentPlaying + 1)%2).emit('gameState',GameState.Draw)
        morpion.reset()
        time.sleep(5)
        socketio.emit("gameState",GameState.Registration)
        return

    morpion.currentPlaying = (morpion.currentPlaying + 1)%2
    socketio.emit('playerTurn',morpion.currentPlaying)
    socketio.emit('updateMorpion',morpion.getGrid())
    print(morpion.getGrid())
    print(json)
    return '',200
