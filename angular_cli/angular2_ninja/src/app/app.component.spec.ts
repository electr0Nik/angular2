/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';

// satisfy test case
import { FromNowPipe } from './pipes/from.now.pipe';
import { SimpleTextDirective } from './directives/simple.text.directive';
import { PonyComponent } from './pony/pony.component';
import { RaceComponent } from './race/race.component';
import { SelectablePonyComponent } from "./ponies/selectable.pony.component";
import { ApiService } from './service/api.service';
import { RaceService } from './service/race.service';



// exclude for now
xdescribe('App: Angular2Ninja', () => {

  // add all posible dependencies to satisfy component initialisation
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PoniesComponent,
        FromNowPipe,
        SimpleTextDirective,
        PonyComponent,
        RaceComponent,
        SelectablePonyComponent
      ],
      providers: [
        RaceService,
        ApiService
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
