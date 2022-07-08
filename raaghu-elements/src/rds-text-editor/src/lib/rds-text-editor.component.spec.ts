import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsTextEditorComponent } from './rds-text-editor.component';

describe('RdsTextEditorComponent', () => {
  let component: RdsTextEditorComponent;
  let fixture: ComponentFixture<RdsTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsTextEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
