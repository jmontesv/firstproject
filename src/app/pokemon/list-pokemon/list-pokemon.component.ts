import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonServiceService  } from '../pokemon-service.service';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon-model';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit, OnDestroy {

  public pokemon: Pokemon;

  public abilities: Array<any>;

  public selectedPokemon: Pokemon;
  public errorOcurred: boolean;
  public subscription: Subscription;

  constructor(private pokeService: PokemonServiceService) {
    this.errorOcurred = false;
    this.selectedPokemon = null;
  }

  ngOnInit() {
  }

  getPokemon(name: string) {
  this.subscription =  this.pokeService.getPokemon(name)
    .subscribe(
       (pokemon: Pokemon) => {
        this.pokemon = pokemon;
        this.errorOcurred = false;
        this.selectedPokemon = null;
       },
       (error) => {
        console.log('Ha habido un error', error);
        this.errorOcurred = true;
       });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

