import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePokemonDeckComponent } from './update-pokemon-deck.component';

describe('UpdatePokemonDeckComponent', () => {
  let component: UpdatePokemonDeckComponent;
  let fixture: ComponentFixture<UpdatePokemonDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePokemonDeckComponent]
    });
    fixture = TestBed.createComponent(UpdatePokemonDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
