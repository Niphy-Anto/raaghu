import { TestBed } from '@angular/core/testing';

import { RdsCheckboxService } from './rds-checkbox.service';

describe('RdsBoolChartService', () => {
  let service: RdsCheckboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsCheckboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
