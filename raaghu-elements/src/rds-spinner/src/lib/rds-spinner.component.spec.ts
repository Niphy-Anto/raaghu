import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsSpinnerComponent } from './rds-spinner.component';

describe('RdsSpinnerComponent', () => {
  let component: RdsSpinnerComponent;
  let fixture: ComponentFixture<RdsSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
