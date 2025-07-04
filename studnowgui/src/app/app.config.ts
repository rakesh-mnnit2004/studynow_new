import { ApplicationConfig, APP_INITIALIZER, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { httpInterceptor } from './http-interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {AuthService } from './auth/auth-service'

// Example initializer function
export function appInitializerFactory(authService: AuthService) {
  return () => authService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideHttpClient(withInterceptors([httpInterceptor])),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), // <-- Add this line
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [AuthService],
      multi: true
    }
  ]
};