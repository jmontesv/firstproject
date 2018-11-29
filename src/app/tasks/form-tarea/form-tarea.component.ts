import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.css']
})
export class FormTareaComponent implements OnInit {
  public defaultDate: string;
  public dateNow: number;

  constructor(private tareaservice: TareaService) { this.dateNow = Date.now(); }

  ngOnInit() {
    const now = Date.now();
    const nowDate = new Date(now);
    this.defaultDate = nowDate.toLocaleDateString()
      .split('/').reverse().join('-');
  }

  addTask(nombretarea: HTMLInputElement, descripciontarea: HTMLInputElement,
    timecontrol: HTMLInputElement, datecontrol: HTMLInputElement) {
      this.tareaservice.addTask(nombretarea.value, descripciontarea.value,
      timecontrol.value, datecontrol.value);
      nombretarea.value = '' ;
      descripciontarea.value = '';
      timecontrol.value = '';
      datecontrol.value = this.defaultDate;
      return false;
  }
 }
