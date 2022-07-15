import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantSettingsShimmerComponent } from './rds-comp-tenant-settings-shimmer.component';

describe('RdsCompTenantSettingsShimmerComponent', () => {
  let component: RdsCompTenantSettingsShimmerComponent;
  let fixture: ComponentFixture<RdsCompTenantSettingsShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantSettingsShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantSettingsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
