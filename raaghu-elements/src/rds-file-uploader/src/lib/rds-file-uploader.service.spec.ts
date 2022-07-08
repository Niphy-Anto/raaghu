import { TestBed } from '@angular/core/testing';

import { RdsFileUploaderService } from './rds-file-uploader.service';

describe('RdsFileUploaderService', () => {
  let service: RdsFileUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsFileUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
