import { CounterComponent } from './components/counter/counter.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainViewComponent,
    children: [
      {path: '', component: CounterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
