import { TestBed } from '@angular/core/testing';

import { RdsSideNavService } from './rds-side-nav.service';

describe('RdsSideNavService', () => {
  let service: RdsSideNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsSideNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
