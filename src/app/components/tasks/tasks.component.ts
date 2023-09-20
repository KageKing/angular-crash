import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
   tasks: Task[] = [];

   constructor(private taskServics:TaskService){}

   ngOnInit(): void{
    this.taskServics.getTasks().subscribe((tasks) => (this.tasks =tasks));
   }
}
