import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPokemonComponent } from './form-pokemon/form-pokemon.component';
import { AuthguardGuard } from '../authguard.guard';

const pokemons: Routes = [
  { path: 'form-pokemon',
    component: FormPokemonComponent,
    canActivate: [ AuthguardGuard ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(pokemons)
  ],
  declarations: [

  ]
})
export class PokemonRoutingModule { }
