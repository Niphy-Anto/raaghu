import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsMaintenanceShimmerComponent } from './rds-maintenance-shimmer.component';

describe('RdsMaintenanceShimmerComponent', () => {
  let component: RdsMaintenanceShimmerComponent;
  let fixture: ComponentFixture<RdsMaintenanceShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsMaintenanceShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsMaintenanceShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
