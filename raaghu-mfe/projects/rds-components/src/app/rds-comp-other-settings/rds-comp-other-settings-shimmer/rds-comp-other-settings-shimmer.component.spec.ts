import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompOtherSettingsShimmerComponent } from './rds-comp-other-settings-shimmer.component';

describe('RdsCompOtherSettingsShimmerComponent', () => {
  let component: RdsCompOtherSettingsShimmerComponent;
  let fixture: ComponentFixture<RdsCompOtherSettingsShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompOtherSettingsShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompOtherSettingsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
