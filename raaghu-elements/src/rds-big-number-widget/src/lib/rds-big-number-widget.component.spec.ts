import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsBigNumberWidgetComponent } from './rds-big-number-widget.component';

describe('RdsBigNumberWidgetComponent', () => {
  let component: RdsBigNumberWidgetComponent;
  let fixture: ComponentFixture<RdsBigNumberWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsBigNumberWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsBigNumberWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
