import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { PokemonDeckRoutingModule } from './pokemon-deck-routing.module';

//Pages
import { PokemonDeckListComponent } from './pokemon-deck-list/pokemon-deck-list.component';
import { CreatePokemonDeckComponent } from './create-pokemon-deck/create-pokemon-deck.component';
import { PokemonDeckDetailsComponent } from './pokemon-deck-details/pokemon-deck-details.component';
import { UpdatePokemonDeckComponent } from './update-pokemon-deck/update-pokemon-deck.component';

//Module
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    PokemonDeckListComponent,
    CreatePokemonDeckComponent,
    PokemonDeckDetailsComponent,
    UpdatePokemonDeckComponent
  ],
  imports: [
    CommonModule,
    PokemonDeckRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class PokemonDeckModule { }
