import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsDatepickerComponent } from './rds-datepicker.component';

describe('RdsDatepickerComponent', () => {
  let component: RdsDatepickerComponent;
  let fixture: ComponentFixture<RdsDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
