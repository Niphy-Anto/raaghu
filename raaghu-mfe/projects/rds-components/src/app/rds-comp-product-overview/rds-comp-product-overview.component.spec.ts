import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompProductOverviewComponent } from './rds-comp-product-overview.component';

describe('RdsCompProductOverviewComponent', () => {
  let component: RdsCompProductOverviewComponent;
  let fixture: ComponentFixture<RdsCompProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompProductOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
