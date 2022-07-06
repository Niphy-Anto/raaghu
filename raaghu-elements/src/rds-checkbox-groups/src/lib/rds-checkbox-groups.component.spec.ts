import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCheckboxGroupsComponent } from './rds-checkbox-groups.component';

describe('RdsCheckboxGroupsComponent', () => {
  let component: RdsCheckboxGroupsComponent;
  let fixture: ComponentFixture<RdsCheckboxGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCheckboxGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCheckboxGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
