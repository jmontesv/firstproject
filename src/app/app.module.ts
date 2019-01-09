import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { createCustomElement } from '@angular/elements';
import { MessageComponent } from './alert-message';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeroesModule } from './heroes/heroes.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { TasksModule } from './tasks/tasks.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ObserviceService } from './testobservables/observice.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ExponentialStrengthPipe } from './pipes/pipes-component/exponential-pipe';

import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestobservablesComponent } from './testobservables/testobservables.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { VersionParentComponent } from './version/version-parent/version-parent.component';
import { VersionChildComponent } from './version/version-child/version-child.component';
import { PipesComponentComponent } from './pipes/pipes-component/pipes-component.component';
import { TimerComponent } from './timer/timer/timer.component';
import { ParentTimerComponent } from './timer/parent-timer/parent-timer.component';
import { FormsComponent } from './forms/forms.component';
import { ObservablesComponent } from './observables/observables.component';
import { LoadingComponent } from './loading/loading.component';
import { AuthService } from './authservice.service';
import { CanDeactivateGuard } from './tasks/form-tarea/candeactiveguard.service.';
import { PracobsComponent } from './practica-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    InicioComponent,
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
    LoadingComponent,
    MessageComponent,
    PracobsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    HeroesModule,
    PokemonModule,
    TasksModule,
    AppRoutingModule
  ],
  providers: [ ObserviceService, AuthService, CanDeactivateGuard ],
  bootstrap: [ AppComponent ],
  entryComponents: [ MessageComponent ]
})
export class AppModule {

  constructor(private injector: Injector) {
    const el = createCustomElement( MessageComponent, { injector: this.injector });
    customElements.define('message-element', el);

  }
}
