import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePokemonDeckComponent } from './create-pokemon-deck.component';

describe('CreatePokemonDeckComponent', () => {
  let component: CreatePokemonDeckComponent;
  let fixture: ComponentFixture<CreatePokemonDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePokemonDeckComponent]
    });
    fixture = TestBed.createComponent(CreatePokemonDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
