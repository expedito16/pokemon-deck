import { TestBed } from '@angular/core/testing';

import { PokemonDeckService } from './pokemon-deck.service';

describe('PokemonDeckService', () => {
  let service: PokemonDeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
