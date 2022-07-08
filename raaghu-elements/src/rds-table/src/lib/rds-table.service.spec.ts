import { TestBed } from '@angular/core/testing';

import { RdsTableService } from './rds-table.service';

describe('RdsTableService', () => {
  let service: RdsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
