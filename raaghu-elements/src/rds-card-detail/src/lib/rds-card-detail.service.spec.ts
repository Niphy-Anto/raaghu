import { TestBed } from '@angular/core/testing';

import { RdsCardDetailService } from './rds-card-detail.service';

describe('RdsCardDetailService', () => {
  let service: RdsCardDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsCardDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
