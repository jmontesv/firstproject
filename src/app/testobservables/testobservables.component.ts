import { Component, OnInit } from '@angular/core';
import { ObserviceService } from './observice.service';
import { color } from './color';

@Component({
  selector: 'app-testobservables',
  templateUrl: './testobservables.component.html',
  styleUrls: ['./testobservables.component.css']
})
export class TestobservablesComponent implements OnInit {
  colores$: Array<color>;
  constructor(private obs: ObserviceService) { }
  ngOnInit() {
    this.obs.getcolores$()
      .subscribe((colores: Array<color>) =>
       this.colores$ = colores);
  }
}
