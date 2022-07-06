import { TestBed } from '@angular/core/testing';

import { RdsChartScatterService } from './rds-chart-scatter.service';

describe('RdsChartScatterService', () => {
  let service: RdsChartScatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartScatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
