import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modules
import { PokemonDeckModule } from './pages/pokemon-deck/pokemon-deck.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonDeckModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
