

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersTableComponent } from './users-table.component';
import { User } from '../user.model';

describe('UsersTableComponent', () => {
  let component: UsersTableComponent;
  let fixture: ComponentFixture<UsersTableComponent>;

  const mockUsers: User[] = [
    {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        address: {
          street: '123 Main St',
          suite: 'Apt 456',
          city: 'New York', 
          zipcode: '10001',
          geo: {
            lat: '40.7128',
            lng: '-74.0060',
          },
        },
    },
    {
        id: 2,
        name: 'John Bee',
        username: 'johnbee',
        email: 'johnbee@example.com',
        address: {
          street: '124 Main St',
          suite: 'Apt 457',
          city: 'New York', 
          zipcode: '10002',
          geo: {
            lat: '41.7128',
            lng: '-75.0060',
          },
        },
    }
    

  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersTableComponent],
    });

    fixture = TestBed.createComponent(UsersTableComponent);
    component = fixture.componentInstance;
    component.users = mockUsers;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display users in a table', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(mockUsers.length + 1);

    mockUsers.forEach((user, index) => {
      const cells = tableRows[index + 1].querySelectorAll('td');
      expect(cells[0].textContent).toContain(user.name);
      expect(cells[1].textContent).toContain(user.address.city);
    });
  });
});
