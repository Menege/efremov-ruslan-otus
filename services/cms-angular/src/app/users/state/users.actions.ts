import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: any[] }>()
);
export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: string }>()
);

export const updateUserRole = createAction(
  '[Users] Update User Role',
  props<{ userId: string; role: string }>()
);
export const updateUserRoleSuccess = createAction('[Users] Update User Role Success');
export const updateUserRoleFailure = createAction(
  '[Users] Update User Role Failure',
  props<{ error: string }>()
);
