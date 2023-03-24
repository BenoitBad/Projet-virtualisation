import { Component, OnInit } from '@angular/core';
import { Player } from './player.component';
import { GameState } from './game-state.enumeration';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Front';
  player : Player;
  gameState : GameState;
  readonly GameState = GameState;

  constructor(){
    this.player = new Player("","");
    this.gameState = GameState.Initiation;
  }



}
