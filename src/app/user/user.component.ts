import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './user.model';
import * as UserActions from './store/user.actions';
import { UsersTableComponent } from './user-table/users-table.component';
import { CommonModule } from '@angular/common';
import * as userSelectors from './store/user.selectors';

@Component({
    standalone: true,
    imports: [UsersTableComponent, CommonModule],
    selector: 'app-user',
   template: `
        <app-users-table [users]="users$ | async"></app-users-table>
    `,
  })

  export class UserComponent implements OnInit {
    users$: Observable<User[]>;

    constructor(private store: Store){
        this.users$ = this.store.select(userSelectors.getUsers);
    }

    ngOnInit(): void {
        this.store.dispatch(UserActions.loadUsers());
    }
  }