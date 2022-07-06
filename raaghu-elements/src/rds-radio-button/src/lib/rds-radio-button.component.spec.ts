import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsRadioButtonComponent } from './rds-radio-button.component';

describe('RdsRadioButtonComponent', () => {
  let component: RdsRadioButtonComponent;
  let fixture: ComponentFixture<RdsRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
