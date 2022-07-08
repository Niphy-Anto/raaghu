import { TestBed } from '@angular/core/testing';

import { RdsBigNumberWidgetService } from './rds-big-number-widget.service';

describe('RdsBigNumberWidgetService', () => {
  let service: RdsBigNumberWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsBigNumberWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
