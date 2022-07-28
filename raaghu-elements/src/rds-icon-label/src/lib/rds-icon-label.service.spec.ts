import { TestBed } from '@angular/core/testing';

import { RdsIconLabelService } from './rds-icon-label.service';

describe('RdsIconLabelService', () => {
  let service: RdsIconLabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsIconLabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
