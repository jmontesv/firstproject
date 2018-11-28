import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormTareaComponent } from './tasks/form-tarea/form-tarea.component';
import { TareasComponent } from './tasks/tareas/tareas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestobservablesComponent} from './testobservables/testobservables.component';
import { VersionParentComponent } from './version/version-parent/version-parent.component';
import { PipesComponentComponent } from './pipes/pipes-component/pipes-component.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path: '',  redirectTo: '/añadirtarea', pathMatch: 'full'},
  { path: 'añadirtarea', component: FormTareaComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'testobservable', component: TestobservablesComponent },
  { path: 'version', component: VersionParentComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'pipes', component: PipesComponentComponent  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
