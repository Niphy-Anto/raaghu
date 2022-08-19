import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompBillingComponent } from './rds-comp-billing.component';

describe('RdsCompBillingComponent', () => {
  let component: RdsCompBillingComponent;
  let fixture: ComponentFixture<RdsCompBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
