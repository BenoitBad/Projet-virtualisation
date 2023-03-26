import { Component } from '@angular/core';
import { Player } from '../player.component';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MorpionSocketService } from '../morpion-socket.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent {
  @Input() player!:Player;
  sides : string[];
  @Output() playButtonEvent = new EventEmitter<Observable<number>>();
  @Output() emitConnection = new EventEmitter<void>();

  constructor(private morpionSocket : MorpionSocketService, private cdr: ChangeDetectorRef){
    this.sides = ['X','O'];

    this.morpionSocket.getPlayerId();
    this.morpionSocket.getPlayerTurn().subscribe((playerId)=>this.player.setPlay(this.player.id == playerId))
  }

  clickPlayHandler(){
    this.morpionSocket.emitRegisterPlayer(this.player);
    
    this.playButtonEvent.emit(this.morpionSocket.getPlayerId());
    
  }

  connectionEstablished(){
    this.emitConnection.emit();
  }






}
