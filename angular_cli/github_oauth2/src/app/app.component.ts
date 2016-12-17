import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private cliet_id: string = ''
  private client_security: string = ''
  private authorize_url = ''

  constructor(private http: Http) { 
    window.addEventListener('message', this.onPostMessage, false);
  }




    onPostMessage(event) {
      if(event.data.status === "200") {
          // Use an EventEmitter to notify the other components that user logged in
          console.log()
      }
    }


  loginToGithub() {
    /** 
    let url = 'http://localhost:8080/user';

    let response = this.http.get(url)
    .map(this.extractData)
    .catch(this.handleError);

    let subscribed = response.subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    */
       var options = 'left=100,top=10,width=400,height=500';
    
    window.open('https://github.com/login/oauth/authorize?client_id=c7a4dcc181de5273de17&redirect_uri=http://localhost:4200/', "nameHere", options)

  }

  private extractData(data: Response) {
    console.log(`get successfull; pass json: ${data}`);
    let body = data.json();
    return body || {};
  }


  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
