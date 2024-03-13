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
  getDecksList: any[] = [];
  getDeckName: any[] = [];
  loading: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: PokemonDeckService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getAlldecksPokemonList();
  }

  initForm() {
    this.form = this.formBuilder.group({
      deckName: ['', Validators.required],
      decksList: this.formBuilder.array([], Validators.required)
    });
  }

  getAlldecksPokemonList() {
    this.loading = true;
    this.service.decksPokemonList().subscribe((result: any) => {
      this.getDeckName = result;
    });

    this.service.getAllDecksPokemon().subscribe((result: any) => {
      this.getDecksList = result.data;
      this.loading = false
    }, error => {
      console.error(error);
    });
  }

  checkDuplicateDeckNames(): boolean {
    const deckName = this.form.get('deckName')?.value;
    const count = this.getDeckName.filter((result: any) => result.deckName === deckName).length;
    return count >= 4 ? (alert("Só é possível repetir o nome do baralho 4 vezes."), true) : false;
  }


  onCheckboxChange(e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;
    const deck = this.getDecksList.find(deck => deck.name === checkedValue);
    const checkArray: FormArray = this.form.get('decksList') as FormArray;

    checked
      ? checkArray.push(new FormControl(deck))
      : checkArray.controls.forEach((item: any, i: number) => {
          if (item.value == deck) {
            checkArray.removeAt(i);
          }
        });
  }


  cancel() {
    this.router.navigate(['']);
  }

  save() {
    if (this.form.valid && !this.checkDuplicateDeckNames()) {
      this.loading = true;

      const deckName = this.form.get('deckName')!.value;
      const decksList = this.form.get('decksList')!.value;
      const newPokemonDeck = {deckName: deckName, decksList: decksList };

      this.service.createNewDeckPokemon(newPokemonDeck).subscribe((result: any) => {
        this.router.navigate(['']);
      }, (error) => {
        console.error(error);
      }, () => {
        this.loading = false;
      });
    }
  }
}
