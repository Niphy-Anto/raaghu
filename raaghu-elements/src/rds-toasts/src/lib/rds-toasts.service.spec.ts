import { TestBed } from '@angular/core/testing';

import { RdsToastsService } from './rds-toasts.service';

describe('RdsToastsService', () => {
  let service: RdsToastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsToastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
