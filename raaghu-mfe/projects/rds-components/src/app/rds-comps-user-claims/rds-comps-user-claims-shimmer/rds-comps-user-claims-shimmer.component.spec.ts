import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompsUserClaimsShimmerComponent } from './rds-comps-user-claims-shimmer.component';

describe('RdsCompsUserClaimsShimmerComponent', () => {
  let component: RdsCompsUserClaimsShimmerComponent;
  let fixture: ComponentFixture<RdsCompsUserClaimsShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompsUserClaimsShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompsUserClaimsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
