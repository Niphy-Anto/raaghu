import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompPlanInformationComponent } from './rds-comp-plan-information.component';

describe('RdsCompPlanInformationComponent', () => {
  let component: RdsCompPlanInformationComponent;
  let fixture: ComponentFixture<RdsCompPlanInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompPlanInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompPlanInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
