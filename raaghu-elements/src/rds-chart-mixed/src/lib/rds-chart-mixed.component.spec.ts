import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartMixedComponent } from './rds-chart-mixed.component';

describe('RdsChartMixedComponent', () => {
  let component: RdsChartMixedComponent;
  let fixture: ComponentFixture<RdsChartMixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartMixedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartMixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
