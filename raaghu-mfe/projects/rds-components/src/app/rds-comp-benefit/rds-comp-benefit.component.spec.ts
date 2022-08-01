import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompBenefitComponent } from './rds-comp-benefit.component';

describe('RdsCompBenefitComponent', () => {
  let component: RdsCompBenefitComponent;
  let fixture: ComponentFixture<RdsCompBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompBenefitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
