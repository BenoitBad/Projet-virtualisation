import { Component, OnInit } from '@angular/core';
import { Player } from './player.component';
import { GameState } from './game-state.enumeration';
import { Observable } from 'rxjs';
import { MorpionSocketService } from './morpion-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Front';
  player : Player;
  gameState : GameState;
  gameState$! : Observable<GameState>;
  readonly GameState = GameState;
  playerId$ !: Observable<number>;


  constructor(private morpionSocket : MorpionSocketService){
    this.player = new Player("","");
    this.gameState = GameState.Initiation;
    this.gameState$ = this.morpionSocket.getGameState();
    this.gameState$.subscribe((data) => this.gameState = data);
  }

  clickJoinHandler(){
    this.gameState = GameState.Registration;
  }

  clickPlayHandler($event : Observable<number>){
    
    this.gameState = GameState.Connecting;
    this.playerId$ = $event;
    this.playerId$.subscribe((data) =>{
      this.player.setId(data);
    })
  }




}
