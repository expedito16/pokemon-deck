import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonDeckService } from '../pokemon-deck.service';

@Component({
  selector: 'app-pokemon-deck-list',
  templateUrl: './pokemon-deck-list.component.html',
  styleUrls: ['./pokemon-deck-list.component.scss']
})
export class PokemonDeckListComponent implements OnInit {
  decksList: any[] = [];

  constructor(
    private router: Router,
    private service: PokemonDeckService
  ) { }

  ngOnInit(): void {
    this.displayDeckList();
  }

  createNewDeck() {
    this.router.navigate(['create-pokemon-deck']);
  }

  displayDeckList() {
    this.service.decksPokemonList().subscribe((result: any) => {
      this.decksList = result;
    })
  }

  viewDeckDetails(id: number) {
    this.router.navigate(['pokemon-deck-details', id]);
  }

  editDeck() { }

  deleteDeck(id: number) {
    this.service.deleteDeckPokemon(id).subscribe((dados: any) => {
      this.decksList = dados;
      this.router.navigate(['']);
    })
  }
}
