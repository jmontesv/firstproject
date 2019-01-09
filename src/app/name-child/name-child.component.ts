import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.css']
})
export class NameChildComponent {

  private _name = '';

  @Input()
  set name(name: string) {
    this._name = name.trim() || '<no name set>';  // trim() Devuelve el string que le pasemos sin espacios.
  }

  get name(): string { return this._name; }

  constructor() { }



}
