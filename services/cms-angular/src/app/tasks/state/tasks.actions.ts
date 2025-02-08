import { createAction, props } from '@ngrx/store';

export const loadTasks = createAction('[Tasks] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Tasks] Load Tasks Success',
  props<{ tasks: any[] }>()
);
export const loadTasksFailure = createAction(
  '[Tasks] Load Tasks Failure',
  props<{ error: string }>()
);

export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ task: any }>()
);
export const addTaskSuccess = createAction('[Tasks] Add Task Success');
export const addTaskFailure = createAction(
  '[Tasks] Add Task Failure',
  props<{ error: string }>()
);
