import { TestBed } from '@angular/core/testing';

import { RdsSelectListService } from './rds-select-list.service';

describe('RdsSelectListService', () => {
  let service: RdsSelectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsSelectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
