import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsTextareaComponent } from './rds-textarea.component';

describe('RdsTextareaComponent', () => {
  let component: RdsTextareaComponent;
  let fixture: ComponentFixture<RdsTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
