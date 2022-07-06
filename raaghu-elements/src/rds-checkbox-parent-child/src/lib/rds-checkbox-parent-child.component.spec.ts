import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCheckboxParentChildComponent } from './rds-checkbox-parent-child.component';

describe('RdsCheckboxParentChildComponent', () => {
  let component: RdsCheckboxParentChildComponent;
  let fixture: ComponentFixture<RdsCheckboxParentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCheckboxParentChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCheckboxParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
