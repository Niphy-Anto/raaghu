import { TestBed } from '@angular/core/testing';

import { RdsChartBoolService } from './rds-chart-bool.service';

describe('RdsChartBoolService', () => {
  let service: RdsChartBoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartBoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
