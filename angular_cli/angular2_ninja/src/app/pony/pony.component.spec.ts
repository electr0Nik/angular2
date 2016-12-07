

import { TestBed } from '@angular/core/testing';

import { PonyComponent } from './pony.component';


describe('creating test suite for pony component', () => {

  beforeEach(() => {
    // setup TestBed
    TestBed.configureTestingModule({
      declarations: [PonyComponent]
    });
  });

  it('should contain an image', () => {
    // _given_
    // create representation of our component
    const fixture = TestBed.createComponent(PonyComponent);

    // create an instance of component
    const ponyComponent = fixture.componentInstance;

    // initialize component with pony as input
    ponyComponent.pony = { id: 1, name: 'Awesome-oooh' };

    // _when_
    // use component representation to trigger changes
    fixture.detectChanges();

    // _then_
    // something should happen with an element
    const element = fixture.nativeElement;

    // expect that something happened
    expect(element.querySelector('img').getAttribute('src')).toBe('images/pony.png');
  });

  it('should emit an event on click', () => {
    const fixture = TestBed.createComponent(PonyComponent);

    // given a component
    const ponyComponent = fixture.componentInstance;
    ponyComponent.pony = {id: 1, name: 'Lol clicked!'};
    // fake the event with a spy-object
    spyOn(ponyComponent.ponyClicked, 'emit');

    // when we click on the pony
    const element = fixture.nativeElement;
    const image = element.querySelector('img');
    image.dispatchEvent(new Event('click'));

    // trigger change detection
    fixture.detectChanges();

    // then the event-emitter object should have fired an event
    expect(ponyComponent.ponyClicked.emit).toHaveBeenCalled();

  });

});
