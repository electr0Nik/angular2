import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthManager implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {
  }

  /**
   * Override _canActivate_ and give the route to navigate to (next: ActivatedRouteSnapshot) and the current snapshot (state: RouterStateSnapshot)
   * <p/>
   * check if route navigates to login:
   * <ul>
   *  <li>check if auth_key is present in local storage</li>
   *  <li>activate route if user not logged in; else log message</li>
   * </url>
   * <p/>
   * else check if auth_key is present in local storage and 
   * activate route to expected page
   * <p>
   * else log error message and route to login page
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let returnValue: boolean;
    if (next.url[0].path == 'login') {
      if (window.localStorage.getItem('auth_key')) {
        console.log('Already logged in!')
        returnValue = false;
      } else {
        returnValue = true;
      }
    } else if (window.localStorage.getItem('auth_key')) {
      returnValue = true;
    } else {
      console.log('You must be logged in!');
      this.router.navigate(['/login']);
      returnValue = false;
    }
    return returnValue;
  }
}
