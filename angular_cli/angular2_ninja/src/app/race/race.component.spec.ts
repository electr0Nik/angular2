/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RaceComponent } from './race.component';
import { PonyComponent } from '../pony/pony.component';

import { By } from '@angular/platform-browser';
// import {By} from 'protractor';
// import By = webdriver.By;


describe('Component: Race', () => {

  let fixture: ComponentFixture<RaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RaceComponent,
        PonyComponent
      ],
    });

    fixture = TestBed.createComponent(RaceComponent);
  });

  it('should create an instance', () => {
    let component = new RaceComponent();
    expect(component).toBeTruthy();
  });

  it('should have a name and a list of ponies', () => {
    // given a component
    const raceComponent = fixture.componentInstance;
    // initialize with race input
    raceComponent.race = {
      name: 'Tokio', ponies: [
        { id: 1, name: 'Wohoo' },
        { id: 2, name: 'Furi' }
      ]
    };

    // when we trigger the change detection
    fixture.detectChanges();

    // then we should have a name with the race name
    const element = fixture.nativeElement;
    expect(element.querySelector('h1').textContent).toBe('Tokio');

    // and a list of ponies
    const ponies = fixture.debugElement.queryAll(By.directive(PonyComponent));
    expect(ponies.length).toBe(2);
    // check if pony is correctly initialized
    const wohoo = ponies[0].componentInstance.pony;
    expect(wohoo.name).toBe('Wohoo');
    expect(wohoo.id).not.toBe(2);
  });

  // fake parents
  // won't work yet, since we try to override component after its initialization
  xit('should have a name', () => {
    TestBed.overrideComponent(RaceComponent, {
      set: {
        template: `
          <h2>{{race.name}}</h2>
         `
      }
    });
    fixture = TestBed.createComponent(RaceComponent);

    // given a component instance
    let raceComponent = fixture.componentInstance;
    // initialize
    raceComponent.race = {name: 'Tokio'};

    // when we trigger the change detection
    fixture.detectChanges();

    // then we should have a name
    let element = fixture.nativeElement;
    expect(element.querySelector('h2').textContent).toBe('Tokio');

  });
});
