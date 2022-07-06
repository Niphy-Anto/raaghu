import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartAreaComponent } from './rds-chart-area.component';

describe('RdsChartAreaComponent', () => {
  let component: RdsChartAreaComponent;
  let fixture: ComponentFixture<RdsChartAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
