import { TestBed } from '@angular/core/testing';

import { RdsCheckboxParentChildService } from './rds-checkbox-parent-child.service';

describe('RdsCheckboxParentChildService', () => {
  let service: RdsCheckboxParentChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsCheckboxParentChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
