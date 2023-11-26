import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../user.model';

export interface UsersState {
  users: User[];
  error: string | null;
}

export const initialState: UsersState = {
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users }))
);
