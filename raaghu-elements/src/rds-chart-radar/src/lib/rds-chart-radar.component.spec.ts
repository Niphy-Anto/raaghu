import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartRadarComponent } from './rds-chart-radar.component';

describe('RdsChartRadarComponent', () => {
  let component: RdsChartRadarComponent;
  let fixture: ComponentFixture<RdsChartRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartRadarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
