import { Component } from '@angular/core';
import { Player } from '../player.component';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent {
  @Input() player!:Player;
  sides : string[];

  constructor(){
    this.sides = ['X','O'];
  }

  clickRegisterHandler(){
    
  }
  log(){
    console.log(this.player);
  }






}
