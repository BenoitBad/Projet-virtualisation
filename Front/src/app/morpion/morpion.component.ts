import { Component } from '@angular/core';
import { Morpion } from './morpion.class';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.css']
})
export class MorpionComponent {
  morpion:Morpion;

  constructor(){
    this.morpion = new Morpion(3);
  }

  clickCaseHandler(){
    
  }

}
