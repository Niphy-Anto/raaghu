import { TestBed } from '@angular/core/testing';

import { RdsStepperService } from './rds-stepper.service';

describe('RdsStepperService', () => {
  let service: RdsStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
