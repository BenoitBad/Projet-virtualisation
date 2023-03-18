import { Component } from '@angular/core';
import { Position } from '../position.class';
import { Morpion } from './morpion.class';
import { GameManagerService } from '../game-manager.service';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.css']
})
export class MorpionComponent {
  morpion:Morpion;



  constructor(private gameManager:GameManagerService){
    this.morpion = new Morpion(3);
  }

  clickCaseHandler(x:number,y:number){
    this.morpion.play(new Position(x,y),"X");
    this.gameManager.increase();

  }

}
