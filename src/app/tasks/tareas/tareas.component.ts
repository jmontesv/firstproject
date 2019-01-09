
import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Task } from '../tarea';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit, DoCheck {
  public totalTasks: number;
  public tasksList: Array<Task>;
  public order: boolean;
  public selectedTask: Task;
  private closeResult;
  @ViewChild('contentModal') contentmodal: HTMLElement;

  constructor(private tareaService: TareaService,
              private router: Router,
              public modalWindow: NgbModal) {
    this.order = false;
    this.selectedTask = null;
  }


  ngOnInit() {
    this.tasksList = this.tareaService.tasks;
    this.totalTasks = this.tasksList.length;
  }

  ngDoCheck() {
    this.totalTasks = this.tasksList.length;
  }

  deleteTask(taskToDelete: Task) {
    this.modalWindow.open(this.contentmodal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = result;
      if (!this.closeResult) {
        return null;
        } else {
          this.tareaService.deleteTask(taskToDelete);
          this.tasksList = [...this.tareaService.tasks];
          this.selectedTask = null;
        }
    }, () => { });
  }

  goToForm() {
    this.router.navigate(['añadirtarea']);
  }
}
