import { TestBed } from '@angular/core/testing';

import { RdsOffcanvasService } from './rds-offcanvas.service';

describe('RdsOffcanvasService', () => {
  let service: RdsOffcanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsOffcanvasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
