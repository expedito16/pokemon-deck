import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonDeckService } from '../pokemon-deck.service';

@Component({
  selector: 'app-create-pokemon-deck',
  templateUrl: './create-pokemon-deck.component.html',
  styleUrls: ['./create-pokemon-deck.component.scss']
})
export class CreatePokemonDeckComponent implements OnInit {
  form!: FormGroup;
  decksList: any[] = [];
  getDecksList: any[] = []

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: PokemonDeckService
  ) { }

  ngOnInit(): void {
    this.getAlldecksPokemonList();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      deckName: ['', Validators.required],
      decksList: this.formBuilder.array([], Validators.required)
    });
  }

  getAlldecksPokemonList() {
    this.service.getAllDecksPokemon().subscribe((result: any) => {
      this.getDecksList = result.data;
    })
  }

  onCheckboxChange(e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;
    const deck = this.getDecksList.find(deck => deck.name === checkedValue);
    const checkArray: FormArray = this.form.get('decksList') as FormArray;
    if (checked) {
      checkArray.push(new FormControl(deck));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == deck) {
          checkArray.removeAt(i);
        }
        i++;
      });
    }
  }

  cancel() {
    this.router.navigate(['']);
  }

  save() {
    if (this.form.valid) {
      const deckName = this.form.get('deckName')!.value;
      const decksList = this.form.get('decksList')!.value;
      const newPokemonDeck = {deckName: deckName, decksList: decksList }
      this.service.createNewDeckPokemon(newPokemonDeck).subscribe((result: any) => {
        result;
        this.router.navigate(['']);
      },
        error => console.error(error)
      );
    }
  }

}
