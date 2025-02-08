import { createReducer, on } from '@ngrx/store';
import * as UserActions from './users.actions';
import { UserState, initialUserState } from './users.state';

export const usersReducer = createReducer(
  initialUserState,
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(UserActions.updateUserRole, (state) => ({
    ...state,
    loading: true
  })),
  on(UserActions.updateUserRoleSuccess, (state) => ({
    ...state,
    loading: false
  })),
  on(UserActions.updateUserRoleFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
