import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompEmailSettingsComponent } from './rds-comp-email-settings.component';

describe('RdsCompEmailSettingsComponent', () => {
  let component: RdsCompEmailSettingsComponent;
  let fixture: ComponentFixture<RdsCompEmailSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompEmailSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompEmailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
