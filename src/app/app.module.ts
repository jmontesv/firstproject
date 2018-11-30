import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeroesModule } from './heroes/heroes.module';

import { TareaService } from './tasks/tarea.service';
import { ServiceheroService } from './heroes/servicehero.service';
import { ObserviceService } from './testobservables/observice.service';

import { AppComponent } from './app.component';

import { DateValidator } from './tasks/form-tarea/date-validation.directive';
import { TimeValidator } from './tasks/form-tarea/time-validation.directive';
import { Orderbyhourpipe } from './tasks/tareas/orderbyhora.pipe';

import { FormTareaComponent } from './tasks/form-tarea/form-tarea.component';
import { TareasComponent } from './tasks/tareas/tareas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestobservablesComponent } from './testobservables/testobservables.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { VersionParentComponent } from './version/version-parent/version-parent.component';
import { VersionChildComponent } from './version/version-child/version-child.component';
import { PipesComponentComponent } from './pipes/pipes-component/pipes-component.component';
import { ExponentialStrengthPipe } from './pipes/pipes-component/exponential-pipe';
import { TimerComponent } from './timer/timer/timer.component';
import { ParentTimerComponent } from './timer/parent-timer/parent-timer.component';
import { FormsComponent } from './forms/forms.component';
import { ObservablesComponent } from './observables/observables.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTareaComponent,
    TareasComponent,
    DashboardComponent,
    TestobservablesComponent,
    DatabindingComponent,
    OnChangesComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    PipesComponentComponent,
    ExponentialStrengthPipe,
    TimerComponent,
    ParentTimerComponent,
    FormsComponent,
    ObservablesComponent,
    Orderbyhourpipe,
    DateValidator,
    TimeValidator
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HeroesModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ObserviceService,
    TareaService,
    ServiceheroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
