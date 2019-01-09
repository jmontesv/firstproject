import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroesComponent } from './heroes.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';

import { ServiceheroService } from './servicehero.service';
import { FilterheroePipe } from './filterheroe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent,
    HeroeDetailComponent,
    FilterheroePipe
  ],
  providers: [ ServiceheroService ]
})
export class HeroesModule { }
