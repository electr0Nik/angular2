import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Hero } from '../hero';
import { HeroSearchService } from './hero-search.service';

@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css'],
  providers: [HeroSearchService]
})


export class HeroSearchComponent implements OnInit {
  constructor(private heroSearchService: HeroSearchService,
    private router: Router) { }

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300) // weit for 300ms pause in events
      .distinctUntilChanged() // ignore if next search term is same as previous
      .switchMap(term => term // switch to new observable each time 
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // error handling
        console.log(error)
        return Observable.of<Hero[]>([])
      })
  }

  gotoDetail(hero: Hero): void {
    this.router.navigate(['/detail', hero.id])
  }
}