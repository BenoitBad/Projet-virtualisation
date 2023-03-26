import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Morpion } from './morpion/morpion.class';
import { Observable,startWith } from 'rxjs';
import { Player } from './player.component';
import { GameState } from './game-state.enumeration';

@Injectable({
  providedIn: 'root'
})
export class MorpionSocketService {
  constructor(private socket: Socket) {
    this.socket.on('connect', () => {
      
    });

    this.socket.on('played', (data: any) => {
      console.log('Event listened!', data); // log the emitted value to console
    });
   }

  getGameState(){
    return this.socket.fromEvent<GameState>('gameState');
  }
  getMorpion(){
    return this.socket.fromEvent<string[][]>('updateMorpion');
  }

  getPlayerId(){
    return this.socket.fromEvent<number>('playerId');
  }

  getPlayerTurn(){
    return this.socket.fromEvent<number>('playerTurn');
  }

  getOpponent(){
    return this.socket.fromEvent<string>('opponent');
  }

  initMorpion(){
    this.socket.emit("getMorpionGrid");
  }

  emitRegisterPlayer(player : Player){
    this.socket.emit("registerPlayer",player);
  }

  emitPlay(x:number,y:number,player : Player){
    this.socket.emit('play',{
      "player": player,
      "x" : x,
      "y" : y,
      "playerId": player.getId(),
    });
  }

  emitOpponent(){
    this.socket.emit("getOpponent");
  }

}
