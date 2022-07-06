import { TestBed } from '@angular/core/testing';

import { RdsNavBarService } from './rds-nav-bar.service';

describe('RdsNavBarService', () => {
  let service: RdsNavBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsNavBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
