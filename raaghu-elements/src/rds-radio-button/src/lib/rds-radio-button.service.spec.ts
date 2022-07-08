import { TestBed } from '@angular/core/testing';

import { RdsRadioButtonService } from './rds-radio-button.service';

describe('RdsRadioButtonService', () => {
  let service: RdsRadioButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsRadioButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
