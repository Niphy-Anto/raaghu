import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompAlertComponent } from './rds-comp-alert.component';

describe('RdsCompAlertComponent', () => {
  let component: RdsCompAlertComponent;
  let fixture: ComponentFixture<RdsCompAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
