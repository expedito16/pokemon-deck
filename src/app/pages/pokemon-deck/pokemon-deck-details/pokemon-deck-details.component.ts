import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDeckService } from '../pokemon-deck.service';

@Component({
  selector: 'app-pokemon-deck-details',
  templateUrl: './pokemon-deck-details.component.html',
  styleUrls: ['./pokemon-deck-details.component.scss']
})
export class PokemonDeckDetailsComponent implements OnInit {
  id: number = 0
  deckName: any[] = [];
  dataDeck: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PokemonDeckService
  ) { }

  ngOnInit(): void {
    this.viewDeckInformation();
  }

  viewDeckInformation() {
    this.id = this.route.snapshot.params['id'];
    console.log("id: ", this.id);
    this.service.getDecksPokemonById(this.id).subscribe((data: any) => {
      this.deckName = data.deckName;
      this.dataDeck = data.decksList;
    });
  }

  back() {
    this.router.navigate(['']);
  }
}
