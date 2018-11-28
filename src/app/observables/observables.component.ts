import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, of, from } from 'rxjs';
import { Hero } from '../heroes/hero';
import { HEROES } from '../heroes/scriptheroes';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  pokemon: any;
  myob: Observable<number>;
  numbers = [];
  constructor() { this.pokemon = ''; }
  ngOnInit() {
    this.myob = new Observable((Observer) => {
     Observer.next(0);
     Observer.next(2);
     Observer.complete();
    });
    this.myob.subscribe(
      (num: number) => { console.log(num);
        this.numbers.push(num); },
      (error) => { console.log(`Error: ${error}`); },
      () => { console.log('completed!'); } );

    const element = document.getElementById('parrafo');
    const event: Observable<Event> = fromEvent(element, 'click');
    event.subscribe((evt: MouseEvent) => {
      console.log(`Coord:${evt.clientX}x ${evt.clientY}y`);
    });
    const url = 'https://pokeapi.co/api/v2/pokemon/1/';
    fetch(url)
      .then(function(response) {
       console.log(response.json());
      });
     const heroes = from(HEROES);
     const heroes$ =  heroes.pipe(
        filter((hero: Hero) => {
          return hero.id === 11;
        }));

    heroes$.subscribe(
      (hero) => {console.log(hero); },
      (error) => {console.log(error); }
    );
  }
}
