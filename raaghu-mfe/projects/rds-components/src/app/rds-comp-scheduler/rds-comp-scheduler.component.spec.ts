import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompSchedulerComponent } from './rds-comp-scheduler.component';

describe('RdsCompSchedulerComponent', () => {
  let component: RdsCompSchedulerComponent;
  let fixture: ComponentFixture<RdsCompSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
