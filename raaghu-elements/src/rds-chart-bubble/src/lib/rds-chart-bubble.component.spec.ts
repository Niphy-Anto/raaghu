import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartBubbleComponent } from './rds-chart-bubble.component';

describe('RdsChartBubbleComponent', () => {
  let component: RdsChartBubbleComponent;
  let fixture: ComponentFixture<RdsChartBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
