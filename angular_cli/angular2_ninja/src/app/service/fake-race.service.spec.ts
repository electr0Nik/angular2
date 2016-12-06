/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FakeRaceService } from './fake-race.service';

describe('Service: FakeRace', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeRaceService]
    });
  });

  it('should ...', inject([FakeRaceService], (service: FakeRaceService) => {
    expect(service).toBeTruthy();
  }));
});
