import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./module1/module1.module').then(m => m.Module1)},
  { path: 'module1', loadChildren: () => import('./module1/module1.module').then(m => m.Module1) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
