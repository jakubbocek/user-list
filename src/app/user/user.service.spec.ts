// user.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from './user.model';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    const mockUsers: User[] = [
      { id: 1, name: 'John Doe', username: 'johndoe', email: 'john@example.com', address: { street: '123 Main St', suite: 'Apt 456', city: 'New York', zipcode: '10001', geo: { lat: '40.7128', lng: '-74.0060' } } },
      { id: 2, name: 'Jane Doe', username: 'janedoe', email: 'jane@example.com', address: { street: '456 Oak St', suite: 'Apt 789', city: 'San Francisco', zipcode: '94105', geo: { lat: '37.7749', lng: '-122.4194' } } }
    ];
  
    service.getUsers().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });
  
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
  
    req.flush(mockUsers);
  });
});
