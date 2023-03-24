export class Player{
    name! : string;
    side! : string;

    constructor(name : string,side : string){
        this.name = name;
        this.side = side;
    }

    toJson(){
        return JSON.stringify(this);
    }

    


}