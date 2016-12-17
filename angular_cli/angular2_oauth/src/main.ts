import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

// import router
import { AppRouterProvider } from './app/routes/main.app.routes';
import { AuthManager } from './app/auth/auth.manager';
import { AuthService } from './app/services/auth/auth.service';

// dependency for auth
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [AppRouterProvider, AuthManager, AuthService, HTTP_PROVIDERS]);
