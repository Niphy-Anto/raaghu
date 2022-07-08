import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompInvoiceComponent } from './rds-comp-invoice.component';

describe('RdsCompInvoiceComponent', () => {
  let component: RdsCompInvoiceComponent;
  let fixture: ComponentFixture<RdsCompInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
