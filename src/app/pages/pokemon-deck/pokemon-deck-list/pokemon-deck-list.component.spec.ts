import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDeckListComponent } from './pokemon-deck-list.component';

describe('PokemonDeckListComponent', () => {
  let component: PokemonDeckListComponent;
  let fixture: ComponentFixture<PokemonDeckListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDeckListComponent]
    });
    fixture = TestBed.createComponent(PokemonDeckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
