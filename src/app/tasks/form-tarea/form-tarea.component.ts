import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.css']
})
export class FormTareaComponent implements OnInit {

  public name: string;
  public description: string;
  public time: string;
  public date: string;

  constructor(private tareaservice: TareaService) {
    const now = Date.now();
    const nowDate = new Date(now);

    this.date = nowDate.toLocaleDateString()
      .split('/').reverse().join('-');
    this.time = nowDate.toLocaleTimeString()
      .substr(0, 5);
  }

  ngOnInit() {}

  addTask() {
    this.tareaservice.addTask(this.name, this.description, this.time, this.date);
    return false;
  }
}
