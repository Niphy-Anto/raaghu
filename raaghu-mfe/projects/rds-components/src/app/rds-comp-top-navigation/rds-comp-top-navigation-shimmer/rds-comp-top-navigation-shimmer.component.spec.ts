import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTopNavigationShimmerComponent } from './rds-comp-top-navigation-shimmer.component';

describe('RdsCompTopNavigationShimmerComponent', () => {
  let component: RdsCompTopNavigationShimmerComponent;
  let fixture: ComponentFixture<RdsCompTopNavigationShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTopNavigationShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTopNavigationShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
