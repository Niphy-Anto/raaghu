import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompPropertiesShimmerComponent } from './rds-comp-properties-shimmer.component';

describe('RdsCompPropertiesShimmerComponent', () => {
  let component: RdsCompPropertiesShimmerComponent;
  let fixture: ComponentFixture<RdsCompPropertiesShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompPropertiesShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompPropertiesShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
