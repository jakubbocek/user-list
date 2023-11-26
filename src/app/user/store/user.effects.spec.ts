// user.effects.spec.ts

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { marbles } from 'rxjs-marbles/jest';
import { UserService } from '../user.service';
import * as UserActions from './user.actions';
import { UserEffects } from './user.effects';

describe('User Effects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        {
          provide: UserService,
          useValue: jasmine.createSpyObj('UserService', ['getUsers']),
        },
      ],
    });

    effects = TestBed.inject(UserEffects);
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it(
    'should load users successfully',
    marbles((m) => {
      const action = UserActions.loadUsers();
      const completion = UserActions.loadUsersSuccess({
        users: [],
      });

      actions$ = m.hot('-a', { a: action });
      const response = m.cold('-a|', { a: completion.users });
      userService.getUsers.and.returnValue(response);

      const expected = m.cold('--b', { b: completion });
      m.expect(effects.loadUsers$).toBeObservable(expected);
    })
  );

  it(
    'should handle load users failure',
    marbles((m) => {
      const action = UserActions.loadUsers();
      const error = 'Some error message';
      const completion = UserActions.loadUsersFailure({ error });

      actions$ = m.hot('-a', { a: action });
      const response = m.cold('-#|', {}, error);
      userService.getUsers.and.returnValue(response);

      const expected = m.cold('--b', { b: completion });
      m.expect(effects.loadUsers$).toBeObservable(expected);
    })
  );
});
