import { TestBed } from '@angular/core/testing';

import { RdsChartRadarService } from './rds-chart-radar.service';

describe('RdsChartRadarService', () => {
  let service: RdsChartRadarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartRadarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
