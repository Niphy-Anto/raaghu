import { TestBed } from '@angular/core/testing';

import { RdsNavTabService } from './rds-nav-tab.service';

describe('RdsNavTabService', () => {
  let service: RdsNavTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsNavTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
