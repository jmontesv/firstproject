import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TareaService } from '../tarea.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from './candeactiveguard.service.';

@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.css']
})
export class FormTareaComponent implements OnInit, CanComponentDeactivate {
  public name: string;
  public description: string;
  public time: string;
  public date: string;
  public changesSaved: boolean;

  constructor(private tareaservice: TareaService, private router: Router) {
    const now = new Date();
    const nowDate = new Date(now);
    const date = nowDate.toLocaleDateString()
      .split('/');
    if (parseFloat(date[0]) >= 10 && parseFloat(date[1]) >= 10) {
      this.date = date.reverse().join('-');
    } else {
      const dateN = date.map((dayOrMonth: string) => {
        if (!dayOrMonth.charAt(1)) {
          return '0' + dayOrMonth;
        } else {
          return dayOrMonth;
        }
      });
      this.date = dateN.reverse().join('-');
    }
    const timeA = nowDate.toTimeString().split(':');
    timeA.pop();
    const timeAModify = timeA.map((valor, index) => {
      if (index === 1) {
        return parseFloat(valor) + 1;
       } else {
         return valor;
       }
      });
    this.time = timeAModify.join(':');
}


  addTask() {
    this.tareaservice.addTask(this.name, this.description, this.time, this.date);
    this.router.navigate(['./tareas']);
    return false;
  }

  ngOnInit() {}
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
