import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompVisualSettingsComponent } from './rds-comp-visual-settings.component';

describe('RdsCompVisualSettingsComponent', () => {
  let component: RdsCompVisualSettingsComponent;
  let fixture: ComponentFixture<RdsCompVisualSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompVisualSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompVisualSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
