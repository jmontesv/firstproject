import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  interval: number;
  contador: number;
  mensaje: string;

  constructor() {
  this.interval = 0;
  this.contador = 10; }

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
    this.stop();
  }

  start() { this.countDown(); }
  stop() { clearInterval(this.interval); }

  countDown() {
  clearInterval(this.interval);
  this.interval = window.setInterval(() => {
      this.contador -= 1;
      if (this.contador === 0 ) { this.mensaje = `BOOM!`; }
        if (this.contador < 0 ) {
          this.contador = 10;
          this.mensaje = `Decrementando...`;
         }
      }, 1000);
    }
  }

