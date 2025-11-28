import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bearerInterceptor } from './auth/interceptors/bearer.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes), 
    provideHttpClient(withInterceptors([bearerInterceptor])),

  ]  
};
