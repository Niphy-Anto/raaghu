import { TestBed } from '@angular/core/testing';

import { RdsChartPieService } from './rds-chart-pie.service';

describe('RdsChartPieService', () => {
  let service: RdsChartPieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartPieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
