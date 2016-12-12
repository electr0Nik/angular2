import {TestBed, inject, async} from '@angular/core/testing';
import {ApiService} from './api.service';
import {BaseRequestOptions, Http, Response, ResponseOptions, RequestMethod} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";

describe('Service: API Service', () => {
  let apiService;
  let mockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // fake http requests
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
        },
        ApiService
      ]
    });
  });

  beforeEach(inject([ApiService, MockBackend], (service, mock) => {
    apiService = service;
    mockBackend = mock;
  }));

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an observable', async(() => {
    // fake response
    const hardCodedResult = [
      {id: 1, name: 'Londong'},
      {id: 2, name: 'Paris'}
    ];
    const response = new Response(new ResponseOptions({body: hardCodedResult}));

    mockBackend.connections.subscribe((connection: MockConnection) => connection.mockRespond(response));

    apiService.get('random/path').subscribe(races => expect(races.length).toBe(2));
  }));

  it('should contain request url \'random/path\'', async(() => {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const response = new Response(new ResponseOptions({body: {id: 1, name: 'nichts'}}));
      // fake response when receiving a request
      connection.mockRespond(response);

      // check if the request is correct
      expect(connection.request.method).toBe(RequestMethod.Get);
      expect(connection.request.url).toBe('random/path');
    });
  }));
});
