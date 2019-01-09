import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: '<app-testobs>',
    template: `

    Practica observables!
    {{marcas$ | async}}
    <button (click)="emitValue()">emitir valor</button>`
})
export class PracobsComponent {
    marcas$ = new Subject<string>();
    constructor() {}
    emitValue() {
        this.marcas$.next('mercedes');
    }
}
