import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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

  getDecksPokemonById(id: number): Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  updateDecksPokemon(id: number, deck: any): Observable<any>{
    return this.http.put(`${this.url}/${id}`, deck);
  }

  deleteDeckPokemon(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
