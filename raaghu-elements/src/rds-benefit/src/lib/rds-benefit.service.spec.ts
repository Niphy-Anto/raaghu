import { TestBed } from '@angular/core/testing';

import { RdsBenefitService } from './rds-benefit.service';

describe('RdsBenefitService', () => {
  let service: RdsBenefitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsBenefitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
