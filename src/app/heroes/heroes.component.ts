import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ServiceheroService } from './servicehero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Array<Hero>;
  public filterValue: string;

constructor(
  private servicehero: ServiceheroService) {this.filterValue = ''; }

  ngOnInit() {
    this.servicehero.getHeroes()
      .subscribe((heroes: Array<Hero>) => {
        this.heroes = heroes;
      });
  }
}
