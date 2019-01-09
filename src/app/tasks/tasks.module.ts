import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DateValidator } from './form-tarea/date-validation.directive';
import { TimeValidator } from './form-tarea/time-validation.directive';
import { Orderbyhourpipe } from './tareas/orderbyhora.pipe';

import { FormTareaComponent } from './form-tarea/form-tarea.component';
import { TareaDetailComponent } from './tarea-detail/tarea-detail.component';
import { TareasComponent } from './tareas/tareas.component';

import { TareaService } from './tarea.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        FormTareaComponent,
        TareaDetailComponent,
        TareasComponent,
        DateValidator,
        TimeValidator,
        Orderbyhourpipe,
     ],
    providers: [ TareaService ]
})

export class TasksModule {}

