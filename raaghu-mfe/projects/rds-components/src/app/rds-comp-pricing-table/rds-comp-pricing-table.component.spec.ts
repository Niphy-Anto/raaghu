import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompPricingTableComponent } from './rds-comp-pricing-table.component';

describe('RdsCompPricingTableComponent', () => {
  let component: RdsCompPricingTableComponent;
  let fixture: ComponentFixture<RdsCompPricingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompPricingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompPricingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
