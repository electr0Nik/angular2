
import { TestBed, async, inject } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('Service: API Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});