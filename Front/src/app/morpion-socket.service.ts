import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io'
@Injectable({
  providedIn: 'root'
})
export class MorpionSocketService {
  socketUrl = 'http://127.0.0.1:5000';

  constructor(private socket: Socket) { }

  ngOnInit(){

  }

  onPlay(){
    this.socket.on('played', (data: any) => {
      console.log('Event listened!', data); // log the emitted value to console
    });
  }
}
