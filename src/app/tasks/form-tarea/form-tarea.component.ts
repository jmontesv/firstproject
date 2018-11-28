import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.css']
})
export class FormTareaComponent implements OnInit {
  public defaultDate: string;

  constructor(private tareaservice: TareaService) {
    const now = Date.now();
    const nowDate = new Date(now);
    this.defaultDate = nowDate.toLocaleDateString()
      .split('/').reverse().join('-');
   }

  ngOnInit() {
  }

  addTask(nombretarea: HTMLInputElement, descripciontarea: HTMLInputElement,
    timecontrol: HTMLInputElement, datecontrol: HTMLInputElement) {
    this.tareaservice.addTask(nombretarea.value, descripciontarea.value, timecontrol.value, datecontrol.value);
    nombretarea.value = '' ;
    descripciontarea.value = '';
    timecontrol.value = '';
    return false;
  }
 }
