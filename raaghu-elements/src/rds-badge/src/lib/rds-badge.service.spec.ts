import { TestBed } from '@angular/core/testing';

import { RdsBadgeService } from './rds-badge.service';

describe('RdsBadgeService', () => {
  let service: RdsBadgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsBadgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
