import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Morpion } from './morpion/morpion.class';
import { Observable,startWith } from 'rxjs';

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

  ngOnInit(){
  }

  getMorpion(){
    return this.socket.fromEvent<string[][]>('updateMorpion');
  }

  emitPlay(x:number,y:number){
    this.socket.emit('play',{
      "name": "",
      "symbole": "O",
      "x" : x,
      "y" : y
    });
  }
}
