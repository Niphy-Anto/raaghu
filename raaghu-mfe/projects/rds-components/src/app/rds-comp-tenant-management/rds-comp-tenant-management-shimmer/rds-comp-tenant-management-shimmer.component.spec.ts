import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantManagementShimmerComponent } from './rds-comp-tenant-management-shimmer.component';

describe('RdsCompTenantManagementShimmerComponent', () => {
  let component: RdsCompTenantManagementShimmerComponent;
  let fixture: ComponentFixture<RdsCompTenantManagementShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantManagementShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantManagementShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
