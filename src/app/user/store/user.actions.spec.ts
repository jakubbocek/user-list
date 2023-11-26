import * as UserActions from './user.actions';

describe('User Actions', () => {
  it('should create an action to load users', () => {
    const action = UserActions.loadUsers();
    expect(action.type).toEqual('[User] Load Users'); 
  });

  it('should create an action to load users success', () => {
    const payload: any = [];
    const action = UserActions.loadUsersSuccess({ users: payload });
    expect(action.type).toEqual('[User] Load Users Success'); 
    expect(action.users).toEqual(payload);
  });

  it('should create an action to load users failure', () => {
    const error = 'Some error message';
    const action = UserActions.loadUsersFailure({ error });
    expect(action.type).toEqual('[User] Load Users Failure'); 
    expect(action.error).toEqual(error);
  });
});
