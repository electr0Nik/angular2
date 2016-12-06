
import { TestBed, async, inject } from '@angular/core/testing';
import { RaceService } from './race.service';
import { ApiService } from './api.service';


describe('Service: Race Service', () => {
  let apiService: ApiService;
  let raceService: RaceService;

  // create a fake dependency for test without creating mock-services
  const apiServiceMock = jasmine.createSpyObj('ApiService', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RaceService,
        // ApiService
        { provide: ApiService, useValue: apiServiceMock }
      ]
    });
  });

  /**
   * exclude for now
    beforeEach(inject([ApiService], (apiService) => {
      service = apiService;
      raceService = new RaceService(service);
    }));
    */
  beforeEach(inject([ApiService, RaceService], (_apiService, _raceService) => {
    raceService = _raceService;
  }));

  it('should ...', inject([RaceService], (service: RaceService) => {
    expect(service).toBeTruthy();
  }));

  it('should return races when list() is called', () => {
    /**
     * api service not implemented yet
     */
    expect(raceService.list()).toBeUndefined();
  });


  /**
   * implement when using promisses
   */
  xit('should expect to return list() asynchrone when called', async(() => {
    // raceService.list().then(races => {
    //  expect(races.lenght).toBe(2);
    // });
  }));


  /**
   * using face dependencies to test function without implementing api service first
   * use inject-function to override apiService to use mock/fake dependency
   */
  it('should expect to return list() from fake dependency', inject([RaceService], (_raceService: RaceService) => {
    apiServiceMock.get.and.returnValue(
      [
        { name: 'Berlin' },
        { name: 'Prag' }
      ]);
    expect(_raceService.list().length).toBe(2);
    expect(apiServiceMock.get).toHaveBeenCalledWith('/races');
  }));
});
