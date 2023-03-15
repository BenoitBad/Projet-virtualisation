import { Component } from '@angular/core';
import { Player } from '../player.component';
@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent {
  player:Player;

  constructor(){
    this.player = new Player("","");
  }

  clickRegisterHandler(){
    
  }





}
