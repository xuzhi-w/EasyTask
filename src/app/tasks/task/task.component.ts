import { Component, inject, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
interface Task{
   id: string;
   userId: string;
   title: string;
   summary: string;
   dueDate: string;
}
@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
    @Input({required: true}) task!:Task;
    private tasksService = inject(TasksService);
  // user: any;

  onCompleteTask(){

    this.tasksService.removeTask(this.task.id);
  }
}
