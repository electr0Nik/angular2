import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {
    constructor(private http: Http) { }

    // mock
    private heroesUrl = 'app/heroes';

    private headers = new Headers({ 'Content-Type': 'application/json' })


    getHeroes(): Promise<Hero[]> {
        // return Promise.resolve(HEROES);
        return this.http
            .get(this.heroesUrl)
            .toPromise() // convert to _Promise_ Object
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }
    /**
     * delay return of mock heroes array for 2 seconds
     */
    /** obsolete
     * 
        getHeroesSlowly(): Promise<Hero[]> {
            return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000))
                .then(() => HEROES);
        }
     */

    getHero(id: number): Promise<Hero> {
        // return Promise.resolve(HEROES[id])
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id))
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError)
    }

    create(name: String): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('Error occured!', error) // print to console for demo purposes
        return Promise.reject(error.message || error)
    }
}