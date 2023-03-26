class Client:
    def __init__(self,socketId,socket):
        self.socketId = socketId
        self.socket = socket
    
    def associatePlayer(self,player):
        self.player = player
    
    def emit(self,event,data):
        self.socket.emit(event,data,room=self.socketId)