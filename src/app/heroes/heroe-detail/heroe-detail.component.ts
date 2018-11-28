import { Component, OnInit, Output  } from '@angular/core';
import { ServiceheroService } from '../servicehero.service';
import { Hero } from '../hero';
import { EventEmitter } from '@angular/core';
// import { Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {
  private hero: Hero;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private heroService: ServiceheroService) {   }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        if (params['id']) {
          const id: number = parseFloat(params.id);
          this.heroService
            .getHero(id)
            .subscribe((hero: Hero) => {
              console.log(hero);
              this.hero = {...hero};
            },
            (error) => {
              console.log('error:', error);
            },
            () => {
              console.log('completado');
            });
        }
     });
  }

  goToHeroes() {
    this.router.navigate(['/heroes']);
  }

  updateHero() {
      this.heroService.updateHero(this.hero);
  }
  deleteHero(hero: Hero) {
    this.heroService.deleteHero(hero);
  }
}
