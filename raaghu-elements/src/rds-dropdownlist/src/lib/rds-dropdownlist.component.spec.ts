import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsDropdownlistComponent } from './rds-dropdownlist.component';

describe('RdsDropdownlistComponent', () => {
  let component: RdsDropdownlistComponent;
  let fixture: ComponentFixture<RdsDropdownlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsDropdownlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsDropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
