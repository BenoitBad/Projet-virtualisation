class Morpion:
    def __init__(self):
        self.grid = [["" for j in range(3)] for i in range(3)]
    
    def play(self,x,y,symbole):
        
        if self.grid[x][y] == 'X' or self.grid[x][y] == 'O':
            return
        if x > len(self.grid[0]) or x < 0 or y > len(self.grid[0] or y < 0):
            return
        
        self.grid[x][y] = symbole
    

    def checkWin(self):
        return False
    
    def reset(self):
        self.grid = [["" for j in range(3)] for i in range(3)] 
        return True
    
    def getGrid(self):
        return self.grid
    
    

