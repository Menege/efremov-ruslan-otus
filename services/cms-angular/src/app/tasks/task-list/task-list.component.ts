import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<any[]>; 

  constructor(private taskService: TaskService) {
    this.tasks$ = new Observable<any[]>(); 
  }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks();
  }

  deleteTask(id: string): void {
    this.tasks$ = this.taskService.deleteTask(id);
  }
}
