import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartPieComponent } from './rds-chart-pie.component';

describe('RdsChartPieComponent', () => {
  let component: RdsChartPieComponent;
  let fixture: ComponentFixture<RdsChartPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
