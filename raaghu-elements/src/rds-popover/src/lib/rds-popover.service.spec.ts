import { TestBed } from '@angular/core/testing';

import { RdsPopoverService } from './rds-popover.service';

describe('RdsPopoverService', () => {
  let service: RdsPopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsPopoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
