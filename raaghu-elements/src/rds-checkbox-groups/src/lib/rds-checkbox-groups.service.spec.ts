import { TestBed } from '@angular/core/testing';

import { RdsCheckboxGroupsService } from './rds-checkbox-groups.service';

describe('RdsCheckboxGroupsService', () => {
  let service: RdsCheckboxGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsCheckboxGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
