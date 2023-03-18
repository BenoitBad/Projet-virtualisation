from flask import Flask,request
from flask_cors import CORS
from player import Player
from morpion import Morpion

app = Flask(__name__)
CORS(app)
morpion = Morpion()


@app.route("/")
def hello_world():
    return "pHello, World!"


@app.route("/play", methods = ["GET"])
def play():
    jsonData = request.get_json()
    x,y,player= jsonData["x"], jsonData["y"],Player.fromJson(jsonData)
    morpion.play(x,y,player.symbole)
    return '',200

