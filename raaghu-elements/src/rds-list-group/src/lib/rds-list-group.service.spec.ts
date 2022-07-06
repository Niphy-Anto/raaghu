import { TestBed } from '@angular/core/testing';

import { RdsListGroupService } from './rds-list-group.service';

describe('RdsListGroupService', () => {
  let service: RdsListGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsListGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
