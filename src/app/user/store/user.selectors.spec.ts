

import * as fromUser from './user.reducer';
import * as UserSelectors from './user.selectors';

describe('User Selectors', () => {
  const initialState: fromUser.UsersState = {
    users: [],
    error: null,
  };

  it('should select users', () => {
    const result = UserSelectors.getUsers.projector(initialState);
    expect(result).toEqual(initialState.users);
  });

  it('should select error', () => {
    const result = UserSelectors.getError.projector(initialState);
    expect(result).toEqual(initialState.error);
  });
});
