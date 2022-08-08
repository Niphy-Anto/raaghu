import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompNewDynamicEntityShimmerComponent } from './rds-comp-new-dynamic-entity-shimmer.component';

describe('RdsCompNewDynamicEntityShimmerComponent', () => {
  let component: RdsCompNewDynamicEntityShimmerComponent;
  let fixture: ComponentFixture<RdsCompNewDynamicEntityShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompNewDynamicEntityShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompNewDynamicEntityShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
