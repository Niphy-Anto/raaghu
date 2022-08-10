import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsStepperComponent } from './rds-stepper.component';

describe('RdsStepperComponent', () => {
  let component: RdsStepperComponent;
  let fixture: ComponentFixture<RdsStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
