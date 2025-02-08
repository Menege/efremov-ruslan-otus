import { ActionReducerMap } from '@ngrx/store';
import { tasksReducer } from './tasks/state/tasks.reducer';
import { tagsReducer } from './tags/state/tags.reducer';
import { usersReducer } from './users/state/users.reducer';
import { Tag } from './models/tag.model';
import { Task } from './models/task.model';
import { User } from './models/user.model';

export interface AppState {
  tasks: Task[];
  tags: Tag[];
  users: User[];
}

export const reducers: ActionReducerMap<AppState> = {
  tasks: tasksReducer,
  tags: tagsReducer,
  users: usersReducer,
};
