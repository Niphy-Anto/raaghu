import { TestBed } from '@angular/core/testing';

import { RdsTextareaService } from './rds-textarea.service';

describe('RdsTextareaService', () => {
  let service: RdsTextareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsTextareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
