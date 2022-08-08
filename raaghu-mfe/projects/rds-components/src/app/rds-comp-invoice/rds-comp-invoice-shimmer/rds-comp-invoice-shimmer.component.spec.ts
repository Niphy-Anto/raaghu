import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompInvoiceShimmerComponent } from './rds-comp-invoice-shimmer.component';

describe('RdsCompInvoiceShimmerComponent', () => {
  let component: RdsCompInvoiceShimmerComponent;
  let fixture: ComponentFixture<RdsCompInvoiceShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompInvoiceShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompInvoiceShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
