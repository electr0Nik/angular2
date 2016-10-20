import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from '../hero';

@Injectable()
export class HeroSearchService {
    constructor(private http: Http) { }

    search(term: String): Observable<Hero[]> {
        const url = `app/heroes/?name=${term}`;
        return this.http
            .get(url)
            .map((r: Response) => r.json().data as Hero[])
    }
}