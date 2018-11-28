import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { ActivatedRoute } from '@angular/router';

import { ServiceheroService } from './servicehero.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Array<Hero>>;
  selectedId: number;

  constructor(
    private service: ServiceheroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      })
    );

  }
}
