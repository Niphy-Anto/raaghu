import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompNotificationSettingsComponent } from './rds-comp-notification-settings.component';

describe('RdsCompNotificationSettingsComponent', () => {
  let component: RdsCompNotificationSettingsComponent;
  let fixture: ComponentFixture<RdsCompNotificationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompNotificationSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompNotificationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
