import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
// import { AuthManager } from './authmanager';


/**
 * generate routes configuration for the marketplace 
 */

/**
 * simple const var containing the route configs
 */
export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent}//, canActivate: [AuthManager] }
];

export const AppRouterProvider = RouterModule.forRoot(appRoutes);