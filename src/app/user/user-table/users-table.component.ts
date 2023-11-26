import { Component, Input } from '@angular/core';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';


@Component({
    standalone: true,
    
    imports:[CommonModule],
    selector: 'app-users-table',
    template: `
    <h2>User table</h2>
    <table>
      <tbody *ngIf="users">
        <tr *ngFor="let user of users">
          <td>{{ user.name }}</td>
          <td>{{ user.address.city }}</td>
        </tr>
      </tbody>
    </table>
  `,
    styleUrls: ["user-table.component.scss"],

  })

  export class UsersTableComponent {
    @Input() users: User[] | null = null;
  }