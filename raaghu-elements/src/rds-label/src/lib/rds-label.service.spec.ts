import { TestBed } from '@angular/core/testing';

import { RdsLabelService } from './rds-label.service';

describe('RdsLabelService', () => {
  let service: RdsLabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsLabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
