import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio.component';
import { FormTareaComponent } from './tasks/form-tarea/form-tarea.component';
import { TareasComponent } from './tasks/tareas/tareas.component';

import { CanDeactivateGuard } from './tasks/form-tarea/candeactiveguard.service.';


const routes: Routes = [
  { path: '',  redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'añadirtarea',
    component: FormTareaComponent,
    canDeactivate: [ CanDeactivateGuard ]},
  { path: 'tareas', component: TareasComponent },
  { path: 'inicio', component: InicioComponent  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
