import { TestBed } from '@angular/core/testing';

import { RdsChartBarHorizontalService } from './rds-chart-bar-horizontal.service';

describe('RdsChartBarHorizontalService', () => {
  let service: RdsChartBarHorizontalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartBarHorizontalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
