import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './user.reducer';
import * as fromUser from './user.reducer';

const getUsersFeatureState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(
  getUsersFeatureState,
  (state) => state.users
);

export const getError = createSelector(
  getUsersFeatureState,
  (state: fromUser.UsersState) => state.error
);