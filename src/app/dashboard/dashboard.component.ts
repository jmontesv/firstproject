import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ServiceheroService } from '../heroes/servicehero.service';
import { Observable } from 'rxjs';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes$: Observable<Array<Hero>>;
  constructor(private heroService: ServiceheroService, private elem: ElementRef) {
  }
  ngOnInit() {
    this.heroes$ = this.heroService.getHeroes();
    this.elem.nativeElement.onclick = (event) => {
      console.log(event);
    };
  }
}
