import { TestBed } from '@angular/core/testing';

import { RdsStatService } from './rds-stat.service';

describe('RdsStatService', () => {
  let service: RdsStatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsStatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
