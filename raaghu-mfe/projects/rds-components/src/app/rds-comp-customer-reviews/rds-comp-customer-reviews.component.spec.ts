import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompCustomerReviewsComponent } from './rds-comp-customer-reviews.component';

describe('RdsCompCustomerReviewsComponent', () => {
  let component: RdsCompCustomerReviewsComponent;
  let fixture: ComponentFixture<RdsCompCustomerReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompCustomerReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompCustomerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
