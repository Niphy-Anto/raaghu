import { TestBed } from '@angular/core/testing';

import { RdsFeedService } from './rds-feed.service';

describe('RdsFeedService', () => {
  let service: RdsFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
