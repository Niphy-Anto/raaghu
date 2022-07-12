import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompNewRoleShimmerComponent } from './rds-comp-new-role-shimmer.component';

describe('RdsCompNewRoleShimmerComponent', () => {
  let component: RdsCompNewRoleShimmerComponent;
  let fixture: ComponentFixture<RdsCompNewRoleShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompNewRoleShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompNewRoleShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
