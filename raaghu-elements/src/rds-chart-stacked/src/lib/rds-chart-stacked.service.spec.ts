import { TestBed } from '@angular/core/testing';

import { RdsChartStackedService } from './rds-chart-stacked.service';

describe('RdsChartStackedService', () => {
  let service: RdsChartStackedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartStackedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
