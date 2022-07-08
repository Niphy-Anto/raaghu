import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartStackedComponent } from './rds-chart-stacked.component';

describe('RdsChartStackedComponent', () => {
  let component: RdsChartStackedComponent;
  let fixture: ComponentFixture<RdsChartStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartStackedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
