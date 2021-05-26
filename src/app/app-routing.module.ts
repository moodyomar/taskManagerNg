import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './comps/page404/page404.component';
import { AppTasksComponent } from './task-manager/app-tasks/app-tasks.component';

const routes: Routes = [
  {path:"", component: AppTasksComponent},
  {path:"**", component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
