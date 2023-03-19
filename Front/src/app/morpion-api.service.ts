import { Injectable } from '@angular/core';
import { Position } from './position.class';
import {Socket} from 'ngx-socket-io'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MorpionAPIService {

  constructor(private socket:Socket) { }

  play(p:Position,symbole:string){

  }

  onPlay(){
    return this.socket.fromEvent('played').subscribe(x=>console.log(x));
  }

}
