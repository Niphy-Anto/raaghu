import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsNotificationComponent } from './rds-comp-notification.component';

describe('RdsNotificationComponent', () => {
  let component: RdsNotificationComponent;
  let fixture: ComponentFixture<RdsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
