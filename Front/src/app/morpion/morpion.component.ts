import { Component, Output } from '@angular/core';
import { Position } from '../position.class';
import { Morpion } from './morpion.class';
import { Socket } from 'ngx-socket-io';
import { GameManagerService } from '../game-manager.service';
import { MorpionSocketService } from '../morpion-socket.service';
import { Observable,startWith ,defaultIfEmpty} from 'rxjs';
import { Input } from '@angular/core';
import { Player } from '../player.component';
@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.css']
})
export class MorpionComponent {
  morpion$:Observable<string[][]>;
  morpion : Morpion;
  @Input() player! : Player;
  @Input() opponent! : Player;


  constructor(private gameManager:GameManagerService,
    private morpionSocket : MorpionSocketService,
    private socket : Socket
    ){

    this.morpion$ = this.morpionSocket.getMorpion();
    this.morpion = new Morpion(3);
    this.morpionSocket.initMorpion();
  
  }

  ngOnInit(){
    
  }

  clickCaseHandler(x:number,y:number){
    if (!this.player.canPlay()) return;
    this.gameManager.increase();
    this.morpionSocket.emitPlay(x,y,this.player);
    
  }

}
