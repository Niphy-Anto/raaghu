import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompDeliveryMethodComponent } from './rds-comp-delivery-method.component';

describe('RdsCompDeliveryMethodComponent', () => {
  let component: RdsCompDeliveryMethodComponent;
  let fixture: ComponentFixture<RdsCompDeliveryMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompDeliveryMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompDeliveryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
