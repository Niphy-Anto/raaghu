import { TestBed } from '@angular/core/testing';

import { RdsAlertService } from './rds-alert.service';

describe('RdsAlertService', () => {
  let service: RdsAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
