import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  isAuthenticated: boolean = false;


/**
 * XHR to backend REST Api to authenticate user
 * <p/>
 * on success, get the jwt-token returned by browser to localStorage with key: auth_key
 */
  authenticate(credentials): Promise {
    let url: string = "http://localhost:3333/authenticate";
    let headers: Headers;
    let fullCredentials: string = `name=${credentials.username}&password=${credentials.password}`;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    return new Promise((resolve) => {

      this.http.post(url, fullCredentials, headers).subscribe(
        (data) => {
          if (data.json().success) {
            window.localStorage.setItem('auth_key', data.json().token);
            this.isAuthenticated = true;
          }
        },
        error => {
          console.log("error");
          this.isAuthenticated = false;
        },
        () => {
          console.log("completed");
          resolve(this.isAuthenticated);
        }
      );
    });
  }

}
