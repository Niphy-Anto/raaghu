import { TestBed } from '@angular/core/testing';

import { RdsChartBubbleService } from './rds-chart-bubble.service';

describe('RdsChartBubbleService', () => {
  let service: RdsChartBubbleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartBubbleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
