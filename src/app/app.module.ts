import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTasksComponent } from './task-manager/app-tasks/app-tasks.component';
import { InputTaskComponent } from './task-manager/input-task/input-task.component';
import { ListTaskComponent } from './task-manager/list-task/list-task.component';
import { HeaderComponent } from './comps/header/header.component';
import { Page404Component } from './comps/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTasksComponent,
    InputTaskComponent,
    ListTaskComponent,
    HeaderComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
