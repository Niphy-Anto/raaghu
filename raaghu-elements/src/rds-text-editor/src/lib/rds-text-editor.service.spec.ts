import { TestBed } from '@angular/core/testing';

import { RdsTextEditorService } from './rds-text-editor.service';

describe('RdsTextEditorService', () => {
  let service: RdsTextEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsTextEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
