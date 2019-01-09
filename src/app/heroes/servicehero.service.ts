import { Injectable, OnInit } from '@angular/core';

import { HEROES } from './scriptheroes';
import { Hero } from './hero';

import { Observable, of, from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class ServiceheroService implements OnInit {
  constructor() {
  }

  ngOnInit() {}

  getHeroes(): Observable<Array<Hero>> {
    return of(HEROES);
  }

  ///////////////////////////////////////////////////////

  getHero(id: number): Observable<Hero> {
    return from(HEROES)
        .pipe(
          filter((heroe: Hero) => {
            return heroe.id === id;
          }
        ));
  }

  updateHero(hero: Hero) {
    HEROES.forEach((h: Hero) => {
      if (h.id === hero.id) {
        h.name = hero.name;
      }
    });
  }
  deleteHero(hero: Hero) {
    HEROES.forEach(
      (heroe: Hero, index) => {
        if (heroe.id === hero.id) {
          HEROES.splice(index, 1);
        }
      }
    );
  }
}


