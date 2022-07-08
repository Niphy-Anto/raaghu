import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompUserManagementComponent } from './rds-comp-user-management.component';

describe('RdsCompUserManagementComponent', () => {
  let component: RdsCompUserManagementComponent;
  let fixture: ComponentFixture<RdsCompUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompUserManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
