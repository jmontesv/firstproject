import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ServiceheroService } from '../heroes/servicehero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes$: Observable<Array<Hero>>;
  constructor(private heroService: ServiceheroService) {
    this.listarheroes();
  }
  ngOnInit() {
      this.heroes$ = this.heroService.getHeroes();
  }
  listarheroes() {
    console.log(this.heroes$);
  }
}
