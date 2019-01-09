import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon-model';


@Injectable()

export class PokemonServiceService {
  URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://pokeapi.co/api/v2/pokemon/';

   }

  getPokemon(POKEMON_NAME: string): Observable<Pokemon> {
  return this.http.get<Pokemon>(this.URL + POKEMON_NAME + '/');
  }
}

