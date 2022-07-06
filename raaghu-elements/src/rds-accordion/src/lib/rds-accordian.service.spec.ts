import { TestBed } from '@angular/core/testing';

import { RdsAccordionService } from './rds-accordion.service';

describe('RdsAccordionService', () => {
  let service: RdsAccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsAccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
