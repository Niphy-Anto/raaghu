import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartLineComponent } from './rds-chart-line.component';

describe('RdsChartLineComponent', () => {
  let component: RdsChartLineComponent;
  let fixture: ComponentFixture<RdsChartLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
