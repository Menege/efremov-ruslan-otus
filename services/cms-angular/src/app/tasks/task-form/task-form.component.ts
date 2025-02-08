import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  taskId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.loadTaskData();
    }
  }

  private initializeForm(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      inputExample: ['', Validators.required],
      outputExample: ['', Validators.required],
      difficulty: ['', Validators.required],
      tags: [[]],
    });
  }

  private loadTaskData(): void {
    this.taskService.getTaskById(this.taskId!).subscribe((task) => {
      this.taskForm.patchValue(task);
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      if (this.taskId) {
        this.taskService.updateTask(this.taskId, taskData).subscribe(() => {
          this.router.navigate(['/tasks']);
        });
      } else {
        this.taskService.addTask(taskData).subscribe(() => {
          this.router.navigate(['/tasks']);
        });
      }
    }
  }
}
