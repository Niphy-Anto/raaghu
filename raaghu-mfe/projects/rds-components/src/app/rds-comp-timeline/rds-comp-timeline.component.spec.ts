import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTimelineComponent } from './rds-comp-timeline.component';

describe('RdsCompTimelineComponent', () => {
  let component: RdsCompTimelineComponent;
  let fixture: ComponentFixture<RdsCompTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
