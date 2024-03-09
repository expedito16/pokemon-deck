import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDeckRoutingModule } from './pokemon-deck-routing.module';

//Pages
import { PokemonDeckListComponent } from './pokemon-deck-list/pokemon-deck-list.component';
import { CreatePokemonDeckComponent } from './create-pokemon-deck/create-pokemon-deck.component';
import { PokemonDeckDetailsComponent } from './pokemon-deck-details/pokemon-deck-details.component';


@NgModule({
  declarations: [
    PokemonDeckListComponent,
    CreatePokemonDeckComponent,
    PokemonDeckDetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonDeckRoutingModule
  ]
})
export class PokemonDeckModule { }
