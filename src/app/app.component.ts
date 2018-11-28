import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  show: boolean;
  constructor(private elem: ElementRef) {
    this.title = 'Bienvenido';
  }
  ngOnInit() {
    this.show = false;
    this.elem.nativeElement.addEventListener('click', (function(event: MouseEvent) {
      if (event && event.target && !(<HTMLElement>event.target).getAttribute('data-toggle')) {
        this.show = false;
      }
    }).bind(this));
  }
  showSubmenu() {
    if (!this.show) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}
