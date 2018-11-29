import { Component, OnInit, DoCheck } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Task } from '../tarea';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit, DoCheck {
  public totalTasks: number;
  public tasksList: Array<Task>;
  public order: boolean;

  constructor(private tareaService: TareaService, private router: Router) {
    this.order = false;
  }


  ngOnInit() {
    this.tasksList = this.tareaService.tasks;
    this.totalTasks = this.tasksList.length;
  }

  ngDoCheck() {
    this.totalTasks = this.tasksList.length;
  }

  deleteTask(taskToDelete: Task) {
    this.tareaService.deleteTask(taskToDelete);
    this.tasksList = [...this.tareaService.tasks];
  }

  goToForm() {
    this.router.navigate(['añadirtarea']);
  }
}
