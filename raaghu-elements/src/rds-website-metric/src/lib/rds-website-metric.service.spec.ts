import { TestBed } from '@angular/core/testing';

import { RdsWebsiteMetricService } from './rds-website-metric.service';

describe('RdsWebsiteMetricService', () => {
  let service: RdsWebsiteMetricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsWebsiteMetricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
