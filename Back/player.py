class Player:
    def __init__(self,name,symbole):
        self.name = name
        self.side = symbole
    
    @staticmethod
    def fromJson(json):
        return Player(json["name"],json["side"])