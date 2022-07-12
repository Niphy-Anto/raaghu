import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTableShimmerComponent } from './rds-comp-table-shimmer.component';

describe('RdsCompTableShimmerComponent', () => {
  let component: RdsCompTableShimmerComponent;
  let fixture: ComponentFixture<RdsCompTableShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTableShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTableShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
