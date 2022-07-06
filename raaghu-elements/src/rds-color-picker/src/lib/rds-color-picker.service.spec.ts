import { TestBed } from '@angular/core/testing';

import { RdsColorPickerService } from './rds-color-picker.service';

describe('RdsColorPickerService', () => {
  let service: RdsColorPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsColorPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
