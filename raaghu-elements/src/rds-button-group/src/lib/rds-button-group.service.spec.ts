import { TestBed } from '@angular/core/testing';

import { RdsButtonGroupService } from './rds-button-group.service';

describe('RdsButtonGroupService', () => {
  let service: RdsButtonGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsButtonGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
