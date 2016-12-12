
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  // TODO
  // return values from api
  get(path: string) {
    return this.http.get(path).map(res => res.json());
  }

}
