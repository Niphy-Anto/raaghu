import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompOrderSummaryComponent } from './rds-comp-order-summary.component';

describe('RdsCompOrderSummaryComponent', () => {
  let component: RdsCompOrderSummaryComponent;
  let fixture: ComponentFixture<RdsCompOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompOrderSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
