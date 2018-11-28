import { Component, OnChanges, SimpleChanges, Input, SimpleChange } from '@angular/core';

import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-on-changes',
  template: `<div class="row"><h3>{{heroe.name}} says:</h3>
  <p>I, {{heroe.name}}, am at your service</p></div>
  <div *ngFor="let chg of changeLog">{{chg}}</div>`
})


export class OnChangesComponent  implements OnChanges {

  changeLog: string[] = [];
  private _name = '';

  constructor() {}


  @Input() heroe: Hero;
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this._name; }
    ngOnChanges (changes: SimpleChanges) {
      console.log(changes);
        // tslint:disable-next-line:curly
        for ( let propName in changes ) {
          const chng = changes[propName];
          const cur  = JSON.stringify(chng.currentValue);
          const prev = JSON.stringify(chng.previousValue);
          this.changeLog.push(`${propName}: currentValue = ${cur},
          previousValue = ${prev}`);
        }
     }
}
