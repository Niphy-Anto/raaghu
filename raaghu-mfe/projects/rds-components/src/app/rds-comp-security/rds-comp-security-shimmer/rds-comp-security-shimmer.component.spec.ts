import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompSecurityShimmerComponent } from './rds-comp-security-shimmer.component';

describe('RdsCompSecurityShimmerComponent', () => {
  let component: RdsCompSecurityShimmerComponent;
  let fixture: ComponentFixture<RdsCompSecurityShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompSecurityShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompSecurityShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
