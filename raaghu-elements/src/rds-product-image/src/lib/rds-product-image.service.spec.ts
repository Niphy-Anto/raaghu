import { TestBed } from '@angular/core/testing';

import { RdsProductImageService } from './rds-product-image.service';

describe('RdsProductImageService', () => {
  let service: RdsProductImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsProductImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
