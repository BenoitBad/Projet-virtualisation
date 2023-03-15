import { TestBed } from '@angular/core/testing';

import { MorpionAPIService } from './morpion-api.service';

describe('MorpionAPIService', () => {
  let service: MorpionAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MorpionAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
