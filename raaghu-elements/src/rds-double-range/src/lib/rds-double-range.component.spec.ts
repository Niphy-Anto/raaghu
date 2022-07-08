import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsDoubleRangeComponent } from './rds-double-range.component';

describe('RdsDoubleRangeComponent', () => {
  let component: RdsDoubleRangeComponent;
  let fixture: ComponentFixture<RdsDoubleRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsDoubleRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsDoubleRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
