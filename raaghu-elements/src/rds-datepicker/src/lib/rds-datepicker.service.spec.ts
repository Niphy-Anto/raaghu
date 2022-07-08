import { TestBed } from '@angular/core/testing';

import { RdsDatepickerService } from './rds-datepicker.service';

describe('RdsDatepickerService', () => {
  let service: RdsDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
