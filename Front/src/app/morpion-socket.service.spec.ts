import { TestBed } from '@angular/core/testing';

import { MorpionSocketService } from './morpion-socket.service';

describe('MorpionSocketService', () => {
  let service: MorpionSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MorpionSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
