import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsRangeComponent } from './rds-range.component';

describe('RdsRangeComponent', () => {
  let component: RdsRangeComponent;
  let fixture: ComponentFixture<RdsRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
