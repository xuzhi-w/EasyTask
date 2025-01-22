import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';
import { NewTaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  [x: string]: any;
  @Input({ required: true }) userId!: string;
  @Input({ required: true })   name!: string;
  isAddingTask = false;
  private tasksService: TasksService;
  constructor(tasksService: TasksService){
    this.tasksService = tasksService;
  }

   get selectedUserTasks(){
      return this.tasksService.getUserTasks(this.userId);
   }

   onCompleteTask(id: string){
      // this.tasksService.removeTask(id);
   }
   onStartAddTask(){
    this.isAddingTask = true;
   }

   onCloseAddTask(){
    this.isAddingTask = false;
   }
}


