import { TestBed } from '@angular/core/testing';

import { RdsChartLineService } from './rds-chart-line.service';

describe('RdsChartLineService', () => {
  let service: RdsChartLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
