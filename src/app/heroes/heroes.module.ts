import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';

import { HeroesRoutingModule } from './heroes-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule
  ],
  declarations: [
    HeroesComponent,
    HeroeDetailComponent
  ]
})
export class HeroesModule { }
