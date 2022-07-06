import { TestBed } from '@angular/core/testing';

import { RdsProgressbarService } from './rds-progressbar.service';

describe('RdsProgressbarService', () => {
  let service: RdsProgressbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsProgressbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
