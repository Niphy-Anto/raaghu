import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsWebsiteMetricComponent } from './rds-website-metric.component';

describe('RdsWebsiteMetricComponent', () => {
  let component: RdsWebsiteMetricComponent;
  let fixture: ComponentFixture<RdsWebsiteMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsWebsiteMetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsWebsiteMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
