import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes-component.component.html',
  styleUrls: ['./pipes-component.component.css']
})
export class PipesComponentComponent implements OnInit {

  toggle = true
  cumpleanos = new Date(1997,5,15)

  constructor() { }

  ngOnInit() {
  }

  get format() { return this.toggle ? 'shortDate' : 'fullDate';}
  
  cambiarFormato() {
     this.toggle = !this.toggle
  }

}
