import { TestBed } from '@angular/core/testing';

import { RdsCollapseService } from './rds-collapse.service';

describe('RdsCollapseService', () => {
  let service: RdsCollapseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsCollapseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
