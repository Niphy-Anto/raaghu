import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompFeaturesEditShimmerComponent } from './rds-comp-features-edit-shimmer.component';

describe('RdsCompFeaturesEditShimmerComponent', () => {
  let component: RdsCompFeaturesEditShimmerComponent;
  let fixture: ComponentFixture<RdsCompFeaturesEditShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompFeaturesEditShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompFeaturesEditShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
