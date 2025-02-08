import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './tasks.actions';
import { TaskState, initialTaskState } from './tasks.state';

export const tasksReducer = createReducer(
  initialTaskState,
  on(TaskActions.loadTasks, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    loading: false
  })),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(TaskActions.addTask, (state) => ({
    ...state,
    loading: true
  })),
  on(TaskActions.addTaskSuccess, (state) => ({
    ...state,
    loading: false
  })),
  on(TaskActions.addTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
