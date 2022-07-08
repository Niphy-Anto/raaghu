import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartPolarAreaComponent } from './rds-chart-polar-area.component';

describe('RdsChartPolarAreaComponent', () => {
  let component: RdsChartPolarAreaComponent;
  let fixture: ComponentFixture<RdsChartPolarAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartPolarAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartPolarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
