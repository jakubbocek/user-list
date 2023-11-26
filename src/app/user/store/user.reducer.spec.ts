
import { userReducer, initialState } from './user.reducer';
import * as UserActions from './user.actions';

describe('User Reducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;
    const state = userReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should handle loadUsersSuccess', () => {
    const payload:any = [];
    const action = UserActions.loadUsersSuccess({ users: payload });
    const state = userReducer(initialState, action);

    expect(state.users).toEqual(payload);
    expect(state.error).toBeNull();
  });

  it('should handle loadUsersFailure', () => {
    const error = 'Some error message';
    const action = UserActions.loadUsersFailure({ error });
    const state = userReducer(initialState, action);

    expect(state.users).toEqual([]);
    expect(state.error).toEqual(error);
  });
});
