import { TestBed } from '@angular/core/testing';

import { RdsDropdownService } from './rds-dropdown.service';

describe('RdsDropdownService', () => {
  let service: RdsDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
