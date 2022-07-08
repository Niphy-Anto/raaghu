import { TestBed } from '@angular/core/testing';

import { RdsPaginationService } from './rds-pagination.service';

describe('RdsPaginationService', () => {
  let service: RdsPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
