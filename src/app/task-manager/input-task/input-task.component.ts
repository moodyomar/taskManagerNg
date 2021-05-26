import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent implements OnInit {
  taskInput:any = "";
  timeInput:any = "10:00"

  constructor(private taskSer:TasksService) { }

  ngOnInit(): void {
  }

  addTask():void{
    let taksObj = {
      name:this.taskInput,
      time:this.timeInput,
      id:Date.now()
    }
    this.taskSer.addNewTask(taksObj);
    this.taskInput = "";
  }

  resetTasks():void{
    this.taskSer.resetTasks();
  }

}
