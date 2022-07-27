import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompCalendarComponent } from './rds-comp-calendar.component';

describe('RdsCompCalendarComponent', () => {
  let component: RdsCompCalendarComponent;
  let fixture: ComponentFixture<RdsCompCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
