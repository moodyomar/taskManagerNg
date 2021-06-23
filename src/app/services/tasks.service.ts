import { Injectable } from '@angular/core';
import { sortBy } from "lodash";

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  tasks_ar: any[] = [
    { name: "go to work", time: "09:00", id: 1 },
    { name: "go home", time: "16:00", id: 2 },
  ]
  completedTasks: any[] = []
  constructor() { }

  getList(): any {
    if (localStorage["tasks"]) {
      this.tasks_ar = JSON.parse(localStorage["tasks"]);
    }
    return this.tasks_ar;
  }

  addNewTask(_task: any): void {
    this.tasks_ar.push(_task);
    let temp_ar = sortBy(this.tasks_ar, "time")
    this.tasks_ar.splice(0, this.tasks_ar.length);
    this.tasks_ar.push(...temp_ar);
    this.saveToLocal();
  }

  resetTasks(): void {
    this.tasks_ar.splice(0, this.tasks_ar.length);
    this.saveToLocal();
  }

  removeSingleTask(_idDel: any): void {
    let indexToDel = this.tasks_ar.findIndex(item => item.id == _idDel)
    this.tasks_ar.splice(indexToDel, 1);
    this.saveToLocal();
  }
  completeTask(_id: any): void {
    let taskToComplete = this.tasks_ar.filter(item => item.id == _id)
    let indexToComplete = this.tasks_ar.findIndex(item => item.id == _id)
    this.completedTasks.push(...taskToComplete);
      this.tasks_ar.splice(indexToComplete, 1);
    this.saveToLocal();
    console.log(this.completedTasks)
  }

  saveToLocal(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks_ar));
  }


}
