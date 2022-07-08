import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartBoolComponent } from './rds-chart-bool.component';

describe('RdsChartBoolComponent', () => {
  let component: RdsChartBoolComponent;
  let fixture: ComponentFixture<RdsChartBoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartBoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartBoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
