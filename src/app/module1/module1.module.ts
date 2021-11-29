import { CounterRemote } from './services/counter.remote';
import { ResetCounterComponent } from './components/reset-counter/reset-counter.component';
import { CounterStateService } from './services/counter-state.service';
import { MainViewComponent } from './views/main-view/main-view.component';
import { NgModule } from "@angular/core";
import { Module1RoutingModule } from "./module1-routing.module";
import { CounterComponent } from './components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { CounterService } from './services/counter.service';

@NgModule({
  imports: [
    Module1RoutingModule,
    CommonModule,
  ],
  declarations: [
    MainViewComponent,
    CounterComponent,
    ResetCounterComponent,
  ],
  providers:[
    CounterService,
    CounterStateService,
    CounterRemote,
  ]
})

export class Module1 {}
