

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { UserComponent } from './user.component';
import * as UserActions from './store/user.actions';
import * as fromUser from './store/user.reducer';


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let store: any; 

  beforeEach(() => {
    store = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: Store, useValue: store },
      ],
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });
 

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadUsers action on ngOnInit', () => {
    // Spy on the dispatch method
    spyOn(store, 'dispatch');

    // Mock the select method
    spyOn(store, 'select').and.returnValue(of([]));

    // Trigger ngOnInit
    component.ngOnInit();

    // Verify that the correct action is dispatched
    expect(store.dispatch).toHaveBeenCalledWith(UserActions.loadUsers());
  });
});
