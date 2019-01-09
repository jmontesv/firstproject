import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero';
@Pipe({
  name: 'filterheroe'
})
export class FilterheroePipe implements PipeTransform {

  transform(heroes: Array<Hero>, filterValue: string): Array<Hero>  {
    if (filterValue !== '') {
      const heroesFiltered = [];
      heroes.forEach((heroe: Hero) => {
        if ( heroe.name === filterValue ) { heroesFiltered.push(heroe); }
      });
      return heroesFiltered;
    } else {
      return heroes;
    }
  }
}
