import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartDoughnutComponent } from './rds-chart-doughnut.component';

describe('RdsChartDoughnutComponent', () => {
  let component: RdsChartDoughnutComponent;
  let fixture: ComponentFixture<RdsChartDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartDoughnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
