import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsColorPickerComponent } from './rds-color-picker.component';

describe('RdsColorPickerComponent', () => {
  let component: RdsColorPickerComponent;
  let fixture: ComponentFixture<RdsColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
