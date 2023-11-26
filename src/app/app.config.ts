import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './user/store/user.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UserEffects } from './user/store/user.effects';
import {  provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ users: userReducer }), provideEffects([UserEffects]), provideStoreDevtools({
    maxAge: 25,
    autoPause: true,
    trace: false, 
    traceLimit: 75, 
  }),   provideHttpClient(),]
};
