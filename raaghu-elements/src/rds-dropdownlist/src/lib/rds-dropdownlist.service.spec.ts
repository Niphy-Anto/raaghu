import { TestBed } from '@angular/core/testing';

import { RdsDropdownlistService } from './rds-dropdownlist.service';

describe('RdsDropdownlistService', () => {
  let service: RdsDropdownlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsDropdownlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
