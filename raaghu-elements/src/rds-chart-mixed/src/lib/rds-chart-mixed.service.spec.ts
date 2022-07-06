import { TestBed } from '@angular/core/testing';

import { RdsChartMixedService } from './rds-chart-mixed.service';

describe('RdsChartMixedService', () => {
  let service: RdsChartMixedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartMixedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
