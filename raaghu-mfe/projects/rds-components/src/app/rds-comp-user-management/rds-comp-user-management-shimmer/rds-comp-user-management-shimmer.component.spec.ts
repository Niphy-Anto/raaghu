import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompUserManagementShimmerComponent } from './rds-comp-user-management-shimmer.component';

describe('RdsCompUserManagementShimmerComponent', () => {
  let component: RdsCompUserManagementShimmerComponent;
  let fixture: ComponentFixture<RdsCompUserManagementShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompUserManagementShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompUserManagementShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
