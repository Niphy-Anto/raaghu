import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompClaimsShimmerComponent } from './rds-comp-claims-shimmer.component';

describe('RdsCompClaimsShimmerComponent', () => {
  let component: RdsCompClaimsShimmerComponent;
  let fixture: ComponentFixture<RdsCompClaimsShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompClaimsShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompClaimsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
