import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { color } from './color';
import { post } from './post';


@Injectable({
  providedIn: 'root'
})


export class ObserviceService implements OnInit {

  private colores$ = new Subject();
  colors: Array<color> = [
   {id: 0, nombre: 'amarillo'},
   {id: 1, nombre: 'rojo'},
   {id: 2, nombre: 'azul'}
  ];

  constructor(private http: HttpClient) { }

  ngOnInit () {}
  agregarcolores( newcolor: color) {
    this.colors.push(newcolor);
    this.colores$.next(this.colors);
  }
  getcolores$(): Observable<color[]> {
    return of(this.colors);
  }
}
