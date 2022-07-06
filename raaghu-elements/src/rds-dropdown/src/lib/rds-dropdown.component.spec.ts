import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsDropdownComponent } from './rds-dropdown.component';

describe('RdsDropdownComponent', () => {
  let component: RdsDropdownComponent;
  let fixture: ComponentFixture<RdsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
