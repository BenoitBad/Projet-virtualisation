export class Player{
    name! : string;
    side! : string;
    id!:number;
    play!:boolean;

    constructor(name : string,side : string){
        this.name = name;
        this.side = side;
        this.play = false;
    }

    setId(id:number){
        this.id = id;
    }

    getId(){
        return this.id;
    }

    setPlay(newState:boolean){
        this.play = newState;
    }
    
    canPlay(){
        return this.play;
    }

    toJson(){
        return JSON.stringify(this);
    }

    static jsonToPlayer(json : string){
        let player : Player = JSON.parse(json);
        return new Player(player.name,player.side);
    }

    


}