import { Component } from '@angular/core';
import { Position } from '../position.class';
import { Morpion } from './morpion.class';
import { GameManagerService } from '../game-manager.service';
import { MorpionSocketService } from '../morpion-socket.service';
@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.css']
})
export class MorpionComponent {
  morpion:Morpion;



  constructor(private gameManager:GameManagerService,
    private morpionSocket : MorpionSocketService){
    this.morpion = new Morpion(3);
    this.morpionSocket.onPlay();
  }

  clickCaseHandler(x:number,y:number){
    this.gameManager.increase();
    
  }

}
