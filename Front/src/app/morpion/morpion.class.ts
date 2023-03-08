import { Position } from '../position.class';

export class Morpion{
    grid:String[][];

    constructor(size:number){
        if (size < 2){
            throw new Error("The grid is too small !")
        }
        this.grid = new Array(size).map(()=>new Array(size).fill(""));
    }

    play(p:Position,symbol:string){
        if (symbol != 'X' && symbol != 'O')
            return
        if (this.grid[p.x][p.y] != '')
            return
        this.grid[p.x][p.y] = symbol;
    }

    checkWin(){
        
    }
}