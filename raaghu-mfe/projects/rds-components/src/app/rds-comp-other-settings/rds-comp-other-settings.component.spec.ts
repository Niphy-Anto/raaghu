import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompOtherSettingsComponent } from './rds-comp-other-settings.component';

describe('RdsCompOtherSettingsComponent', () => {
  let component: RdsCompOtherSettingsComponent;
  let fixture: ComponentFixture<RdsCompOtherSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompOtherSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompOtherSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
