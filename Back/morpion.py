from player import Player
from gameState import GameState

class Morpion:
    def __init__(self):
        self.grid = [["" for j in range(3)] for i in range(3)]
        self.players = []
        self.currentPlaying = -1
        
    def play(self,x,y,symbole):
        print(symbole)

        if self.grid[x][y] == 'X' or self.grid[x][y] == 'O':
            print("Position already taken")
            return False
        if x > len(self.grid[0]) or x < 0 or y > len(self.grid[0] or y < 0):
            print("Position not legal")
            return False

        self.grid[x][y] = symbole
        return True
    
    def totalPlayer(self):
        return len(self.players)
    
    def addPlayer(self,player):
        ttPlayer = len(self.players)
        if ttPlayer == 2:
            return False
        self.players.append(player)
        return True
    
    def getPlayer(self,playerId):
        if playerId > len(self.players):
            return None
        return self.players[playerId]
    
    def checkWin(self,playerSide):
        if self.checkDiagonalWin(playerSide):
            return True
        for i in range(3):
            if self.checkVerticalWin(playerSide,i):
                return True
            if self.checkHorizontalWin(playerSide,i):
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
    
    def checkDraw(self):
        return all(all(case != '' for case in line) == True for  line in self.grid)
    
    def reset(self):
        self.grid = [["" for j in range(3)] for i in range(3)] 
        self.players.clear()
        return True
    
    def getGrid(self):
        return self.grid
    
    

