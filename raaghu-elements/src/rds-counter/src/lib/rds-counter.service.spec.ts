import { TestBed } from '@angular/core/testing';

import { RdsCounterService } from './rds-counter.service';

describe('RdsCounterService', () => {
  let service: RdsCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
