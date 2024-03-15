import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDeckService } from '../pokemon-deck.service';

@Component({
  selector: 'app-update-pokemon-deck',
  templateUrl: './update-pokemon-deck.component.html',
  styleUrls: ['./update-pokemon-deck.component.scss']
})
export class UpdatePokemonDeckComponent implements OnInit {
  form!: FormGroup;
  deckId: number = 0;
  decksList: any[] = [];
  getDecksList: any[] = [];
  getDeckName: any[] = [];
  selectedCardsCount: number = 0;
  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: PokemonDeckService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getAlldecksPokemonList();
    this.getDeckDetails();
  }

  initForm() {
    this.form = this.formBuilder.group({
      deckName: ['', Validators.required],
      decksList: this.formBuilder.array([],
      [Validators.required, Validators.minLength(24), Validators.maxLength(60)])
    });
  }

  getDeckDetails() {
    const id = this.route.snapshot.params['id'];
    this.service.getDecksPokemonById(id).subscribe((data: any) => {
      console.log("data: ",data)
      this.form.patchValue({
        deckName: data.deckName,
        decksList: data.decksList
      });
      this.selectedCardsCount = data.decksList.length;
    }, error => {
      console.error(error);
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

    checked ? this.selectedCardsCount++ : this.selectedCardsCount--;
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

  update() {
    if (this.form.valid && !this.checkDuplicateDeckNames()) {
      this.loading = true;

      const id = this.route.snapshot.params['id'];
      const deckName = this.form.get('deckName')!.value;
      const decksList = this.form.get('decksList')!.value;
      const newPokemonDeck = {deckName: deckName, decksList: decksList };

      this.service.updateDecksPokemon(id, newPokemonDeck).subscribe((result: any) => {
        this.router.navigate(['']);
      }, (error) => {
        console.error(error);
      }, () => {
        this.loading = false;
      });
    }
  }

}
