import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompPaymentDetailsComponent } from './rds-comp-payment-details.component';

describe('RdsCompPaymentDetailsComponent', () => {
  let component: RdsCompPaymentDetailsComponent;
  let fixture: ComponentFixture<RdsCompPaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompPaymentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
