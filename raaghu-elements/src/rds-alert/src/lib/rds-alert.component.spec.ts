import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsAlertComponent } from './rds-alert.component';

describe('RdsAlertComponent', () => {
  let component: RdsAlertComponent;
  let fixture: ComponentFixture<RdsAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
