import { TestBed } from '@angular/core/testing';

import { RdsButtonService } from './rds-button.service';

describe('RdsBoolChartService', () => {
  let service: RdsButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
