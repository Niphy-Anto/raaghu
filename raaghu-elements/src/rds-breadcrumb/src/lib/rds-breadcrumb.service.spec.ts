import { TestBed } from '@angular/core/testing';

import { RdsBreadcrumbService } from './rds-breadcrumb.service';

describe('RdsBreadcrumbService', () => {
  let service: RdsBreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsBreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
