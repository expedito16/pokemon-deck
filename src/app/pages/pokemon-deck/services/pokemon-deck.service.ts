import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDeckService {
  url = 'http://localhost:3000/BaralhosPokemon';
  urlDeckPokemon = 'https://api.pokemontcg.io/v2/cards';

  constructor(
    private http: HttpClient
  ) { }

  getAllDecksPokemon(): Observable<any> {
    return this.http.get(this.urlDeckPokemon);
  }

  decksPokemonList(): Observable<any> {
    return this.http.get(this.url);
  }

  createNewDeckPokemon(deckPokemon: any): Observable<any> {
    return this.http.post(this.url, deckPokemon);
  }
}
