import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDeckDetailsComponent } from './pokemon-deck-details.component';

describe('PokemonDeckDetailsComponent', () => {
  let component: PokemonDeckDetailsComponent;
  let fixture: ComponentFixture<PokemonDeckDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDeckDetailsComponent]
    });
    fixture = TestBed.createComponent(PokemonDeckDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
