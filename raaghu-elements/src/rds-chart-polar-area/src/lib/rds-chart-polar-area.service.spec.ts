import { TestBed } from '@angular/core/testing';

import { RdsChartPolarAreaService } from './rds-chart-polar-area.service';

describe('RdsChartPolarAreaService', () => {
  let service: RdsChartPolarAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartPolarAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
