import { TestBed } from '@angular/core/testing';

import { RdsSpinnerService } from './rds-spinner.service';

describe('RdsSpinnerService', () => {
  let service: RdsSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
