import { TestBed } from '@angular/core/testing';

import { AbcdTempService } from './abcd-temp.service';

describe('AbcdTempService', () => {
  let service: AbcdTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbcdTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
