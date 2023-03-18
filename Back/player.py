class Player:
    def __init__(self,name,symbole):
        self.name = name
        self.symbole = symbole
    
    @staticmethod
    def fromJson(json):
        return Player(json["name"],json["symbole"])