import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompShippingAddressComponent } from './rds-comp-shipping-address.component';

describe('RdsCompShippingAddressComponent', () => {
  let component: RdsCompShippingAddressComponent;
  let fixture: ComponentFixture<RdsCompShippingAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompShippingAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompShippingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
