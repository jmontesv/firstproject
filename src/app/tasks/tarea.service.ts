import { Injectable } from '@angular/core';
import { Task } from './tarea';

@Injectable()

export class TareaService {

  constructor() {}
  tasks: Array<Task> =  [
      new Task('Tenis', 'Entrenamiento de tenis', '07:00', '2018-11-29'),
      new Task('Clases', 'Clases particulares', '16:00', '2018-11-30')
    ];
  addTask(nombre: string, descripcion: string, hora: string, fecha: string) {
    this.tasks.push(new Task(nombre, descripcion, hora, fecha));
  }

  deleteTask(taskToDelete: Task) {
    this.tasks.forEach(
      (taskindex: Task, index) => {
        if (taskindex.nametask === taskToDelete.nametask) {
          this.tasks.splice(index, 1);
        }
    });
  }
}
