import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }         from "../hero/hero";
import { HeroService }  from "../hero/hero.service";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    constructor(private heroService: HeroService,
        private router: Router) { }

    dashboardHeader = 'Top Heroes'
    heroes: Hero[] = []

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 4))
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id]
        this.router.navigate(link)
    }

}
