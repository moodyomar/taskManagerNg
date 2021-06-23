import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  tasks_ar:any[] = [];
  isCompleted:boolean = false;
  constructor(private tasksSer:TasksService) { }

  ngOnInit(): void {
    this.tasks_ar = this.tasksSer.getList();
  }

  delSingleTask(_idDel:any):void{
    this.tasksSer.removeSingleTask(_idDel)
  }
  completeSingleTask(_id:any):void{
setTimeout(() => {
  this.tasksSer.completeTask(_id)
}, 1000);
// this.isCompleted = !this.isCompleted;
console.log('animate')
  }
}
