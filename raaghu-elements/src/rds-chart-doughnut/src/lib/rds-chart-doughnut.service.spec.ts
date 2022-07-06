import { TestBed } from '@angular/core/testing';

import { RdsChartDoughnutService } from './rds-chart-doughnut.service';

describe('RdsChartDoughnutService', () => {
  let service: RdsChartDoughnutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartDoughnutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
