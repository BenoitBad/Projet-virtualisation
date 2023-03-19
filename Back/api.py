from flask import Flask,request
from flask_cors import CORS
from player import Player
from morpion import Morpion
from flask_socketio import SocketIO

app = Flask(__name__)
CORS(app)
socketIO = SocketIO(app,cors_allowed_origins="*")
morpion = Morpion()

if __name__ == '__main__':
    socketIO.run(app)


@app.route("/")
def hello_world():
    return "pHello, World!"


@app.route("/play", methods = ["GET"])
def play():
    jsonData = request.get_json()
    x,y,player= jsonData["x"], jsonData["y"],Player.fromJson(jsonData)
    morpion.play(x,y,player.symbole)
    socketIO.emit('played',{'player':1})
    return '',200

