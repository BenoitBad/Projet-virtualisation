from flask import Flask,request
from flask_cors import CORS
from player import Player
from morpion import Morpion
from flask_socketio import SocketIO

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app,cors_allowed_origins="*")
morpion = Morpion()

if __name__ == '__main__':
    socketio.run(app)


@app.route("/")
def hello_world():
    return "pHello, World!"

'''
@app.route("/play", methods = ["GET"])
def play():
    jsonData = request.get_json()
    x,y,player= jsonData["x"], jsonData["y"],Player.fromJson(jsonData)
    morpion.play(x,y,player.symbole)
    socketio.emit('played',{'player':1})
    return '',200
'''

@socketio.on('getMorpion')
def getMorpion():
    print("called")
    return morpion.getGrid()


@socketio.on('play')
def onPlay(json):
    x,y,player = json["x"], json["y"], Player.fromJson(json)
    morpion.play(x,y,player.symbole)
    socketio.emit('played',{'player':1})
    socketio.emit('updateMorpion',morpion.getGrid())
    print(morpion.getGrid())
    return '',200
