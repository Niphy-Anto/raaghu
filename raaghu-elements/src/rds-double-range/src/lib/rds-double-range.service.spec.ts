import { TestBed } from '@angular/core/testing';

import { RdsDoubleRangeService } from './rds-double-range.service';

describe('RdsDoubleRangeService', () => {
  let service: RdsDoubleRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsDoubleRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
