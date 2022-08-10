import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompPasswordSettingsComponent } from './rds-comp-password-settings.component';

describe('RdsCompPasswordSettingsComponent', () => {
  let component: RdsCompPasswordSettingsComponent;
  let fixture: ComponentFixture<RdsCompPasswordSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompPasswordSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompPasswordSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
