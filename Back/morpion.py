from player import Player
from gameState import GameState

class Morpion:
    def __init__(self):
        self.grid = [["" for j in range(3)] for i in range(3)]
        self.players = []
        self.currentPlaying = -1
        
    def play(self,x,y,symbole):
        
        if self.grid[x][y] == 'X' or self.grid[x][y] == 'O':
            return
        if x > len(self.grid[0]) or x < 0 or y > len(self.grid[0] or y < 0):
            return

        self.grid[x][y] = symbole
    
    def totalPlayer(self):
        return len(self.players)
    
    def addPlayer(self,player):
        ttPlayer = len(self.players)
        if ttPlayer == 2:
            return False
        self.players.append(player)
        return True
    
    def checkWin(self,playerNumber):
        #player = self.players[playerNumber]
        player = Player("","X")
        if self.checkDiagonalWin(player.side):
            return True
        for i in range(3):
            if self.checkVerticalWin(player.side,i):
                return True
            if self.checkHorizontalWin(player.side,i):
                return True
        return False
    
    def checkDiagonalWin(self,side):
        if all(side == self.grid[i][i] for i in range(3)):
            return True
        if all(side == self.grid[i][2-i] for i in range(3)):
            return True
        return False
    
    def checkVerticalWin(self,side,columnIndex):
        if all(side == list[columnIndex] for list in self.grid):
            return True
        return False
    
    def checkHorizontalWin(self,side,lineIndex):
        if all(side == playedCase for playedCase in self.grid[lineIndex]):
            return True
        return False

    
    def reset(self):
        self.grid = [["" for j in range(3)] for i in range(3)] 
        return True
    
    def getGrid(self):
        return self.grid
    
    

