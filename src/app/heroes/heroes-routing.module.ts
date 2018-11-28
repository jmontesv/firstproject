import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';

const Heroroutes: Routes = [
  { path: 'heroes' , component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(Heroroutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
