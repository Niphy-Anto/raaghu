import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCheckboxComponent } from './rds-checkbox.component';

describe('RdsCheckboxComponent', () => {
  let component: RdsCheckboxComponent;
  let fixture: ComponentFixture<RdsCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
