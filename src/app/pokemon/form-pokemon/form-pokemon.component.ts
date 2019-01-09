import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.css']
})
export class FormPokemonComponent implements OnInit {

  pokemonName: string;

  constructor() { this.pokemonName = ''; }

  ngOnInit() { }

}
