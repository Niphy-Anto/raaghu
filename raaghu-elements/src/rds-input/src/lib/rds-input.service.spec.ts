import { TestBed } from '@angular/core/testing';

import { RdsInputService } from './rds-input.service';

describe('RdsBoolChartService', () => {
  let service: RdsInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
