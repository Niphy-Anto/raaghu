import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartScatterComponent } from './rds-chart-scatter.component';

describe('RdsChartScatterComponent', () => {
  let component: RdsChartScatterComponent;
  let fixture: ComponentFixture<RdsChartScatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartScatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
