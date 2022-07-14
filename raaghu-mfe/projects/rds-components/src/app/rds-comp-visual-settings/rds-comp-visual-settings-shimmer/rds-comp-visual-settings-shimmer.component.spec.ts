import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompVisualSettingsShimmerComponent } from './rds-comp-visual-settings-shimmer.component';

describe('RdsCompVisualSettingsShimmerComponent', () => {
  let component: RdsCompVisualSettingsShimmerComponent;
  let fixture: ComponentFixture<RdsCompVisualSettingsShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompVisualSettingsShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompVisualSettingsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
