import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantManagementComponent } from './rds-comp-tenant-management.component';

describe('RdsCompTenantManagementComponent', () => {
  let component: RdsCompTenantManagementComponent;
  let fixture: ComponentFixture<RdsCompTenantManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
