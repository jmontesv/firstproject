import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    const message =  document.createElement('message-element') as any;
    message.meg = 'mensaje desde el DOM estandar';
    document.body.appendChild(message);
  }
}
