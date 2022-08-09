import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompBillingAddressComponent } from './rds-comp-billing-address.component';

describe('RdsCompBillingAddressComponent', () => {
  let component: RdsCompBillingAddressComponent;
  let fixture: ComponentFixture<RdsCompBillingAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompBillingAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompBillingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
