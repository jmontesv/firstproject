import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { FormPokemonComponent } from './form-pokemon/form-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PaginationMoveComponent } from './pagination-move/pagination-move.component';
import { MoveslimitPipePipe } from './moveslimit-pipe.pipe';

import { PokemonServiceService } from './pokemon-service.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PokemonRoutingModule
  ],
  declarations: [
    ListPokemonComponent,
    FormPokemonComponent,
    DetailPokemonComponent,
    PaginationMoveComponent,
    MoveslimitPipePipe
  ],
  providers: [
    PokemonServiceService
  ]
})
export class PokemonModule {}
