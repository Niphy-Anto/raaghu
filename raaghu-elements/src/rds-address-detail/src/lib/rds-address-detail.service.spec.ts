import { TestBed } from '@angular/core/testing';

import { RdsAddressDetailService } from './rds-address-detail.service';

describe('RdsAddressDetailService', () => {
  let service: RdsAddressDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsAddressDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
