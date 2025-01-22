import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  //  [x: string]: any;
   @Input({required: true}) userId !:string
    @Output() close = new EventEmitter<void>();
    @Output() add = new EventEmitter<{title: string; summary : string; date:string;}>();
    enteredTitle = '';
    enteredSummary = '';
    enteredDate = '';
    private tasksService = inject(TasksService);
    onCancel(){
      this.close.emit();
    }

    onSummit(){
      this.tasksService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      },
      this.userId
    );
    this.close.emit();
    }
}
