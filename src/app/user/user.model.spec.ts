
import { TestBed } from '@angular/core/testing';
import { User } from './user.model';

describe('User Model', () => {
  it('should create an instance of User', () => {
    const user: User = {
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
    };

    expect(user).toBeTruthy();
    expect(user.id).toBe(1);
    expect(user.name).toBe('John Doe');
  });
});
