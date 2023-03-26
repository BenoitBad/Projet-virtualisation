import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {
  turn:number;
  constructor() {
    this.turn = 1;
    console.log('GameManagerService constructor called');
   }

   increase(){
    this.turn++;
    console.log(this.turn);
   }
}
