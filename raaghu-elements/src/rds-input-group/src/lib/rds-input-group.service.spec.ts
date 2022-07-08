import { TestBed } from '@angular/core/testing';

import { RdsInputGroupService } from './rds-input-group.service';

describe('RdsInputGroupService', () => {
  let service: RdsInputGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsInputGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
