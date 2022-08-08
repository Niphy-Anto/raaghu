import { TestBed } from '@angular/core/testing';

import { RdsSizeService } from './rds-size.service';

describe('RdsSizeService', () => {
  let service: RdsSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
