import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartBarHorizontalComponent } from './rds-chart-bar-horizontal.component';

describe('RdsChartBarHorizontalComponent', () => {
  let component: RdsChartBarHorizontalComponent;
  let fixture: ComponentFixture<RdsChartBarHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartBarHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartBarHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
