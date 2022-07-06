import { TestBed } from '@angular/core/testing';

import { RdsBannerService } from './rds-banner.service';

describe('RdsBannerService', () => {
  let service: RdsBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
