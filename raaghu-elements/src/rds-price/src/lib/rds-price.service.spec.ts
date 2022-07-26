import { TestBed } from '@angular/core/testing';

import { RdsPriceService } from './rds-price.service';

describe('RdsPriceService', () => {
  let service: RdsPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
