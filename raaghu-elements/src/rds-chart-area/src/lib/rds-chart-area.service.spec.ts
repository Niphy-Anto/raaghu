import { TestBed } from '@angular/core/testing';

import { RdsChartAreaService } from './rds-chart-area.service';

describe('RdsChartAreaService', () => {
  let service: RdsChartAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
