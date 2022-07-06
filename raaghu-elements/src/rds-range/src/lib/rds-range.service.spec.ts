import { TestBed } from '@angular/core/testing';

import { RdsRangeService } from './rds-range.service';

describe('RdsRangeService', () => {
  let service: RdsRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
