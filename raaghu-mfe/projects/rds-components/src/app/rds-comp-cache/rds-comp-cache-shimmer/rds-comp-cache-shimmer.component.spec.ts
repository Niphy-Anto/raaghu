import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompCacheShimmerComponent } from './rds-comp-cache-shimmer.component';

describe('RdsCompCacheShimmerComponent', () => {
  let component: RdsCompCacheShimmerComponent;
  let fixture: ComponentFixture<RdsCompCacheShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompCacheShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompCacheShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
