import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorpionComponent } from './morpion/morpion.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MorpionComponent,
    PlayerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
