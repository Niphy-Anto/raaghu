import { TestBed } from '@angular/core/testing';

import { RdsImageService } from './rds-image.service';

describe('RdsImageService', () => {
  let service: RdsImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
