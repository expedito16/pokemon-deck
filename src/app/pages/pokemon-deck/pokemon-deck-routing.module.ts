import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PokemonDeckListComponent } from './pokemon-deck-list/pokemon-deck-list.component';
import { CreatePokemonDeckComponent } from './create-pokemon-deck/create-pokemon-deck.component';
import { PokemonDeckDetailsComponent } from './pokemon-deck-details/pokemon-deck-details.component';

const routes: Routes = [
  { path: '', component: PokemonDeckListComponent },
  { path: 'create-pokemon-deck', component: CreatePokemonDeckComponent },
  { path: 'pokemon-deck-details/:id', component: PokemonDeckDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonDeckRoutingModule { }
