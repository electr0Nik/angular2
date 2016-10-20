// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';
import { HeroesComponent }      from './hero/heroes.component';
import { HeroService }          from './hero/hero.service';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HeroSearchComponent }     from './hero/search/hero-search.component';

// Mocks
import { InMemoryWebApiModule }  from 'angular-in-memory-web-api/in-memory-web-api.module';
import { MockInMemoryDataService }  from './mock-web-api/mock-memory-data.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(MockInMemoryDataService)
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }