import { Pipe, PipeTransform, Input  } from '@angular/core';
import { Task } from '../tarea';

@Pipe({ name: 'orderbyhour' })
export class Orderbyhourpipe implements PipeTransform {
    transform(tasks: Array<Task>, order: string) {
        if (order) {
            return tasks.map((tarea: Task) => {
                return { ...tarea, datetask: this.getTime(tarea.datetask) };
            }).sort((a, b) => {
                return a.datetask - b.datetask;
            });
        } else {
            return tasks;
        }
    }

    getTime(datetask: Date): number {
        return datetask.getTime();
    }
}

