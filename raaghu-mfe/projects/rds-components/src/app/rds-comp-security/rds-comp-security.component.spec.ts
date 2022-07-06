import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsSecurityComponent } from './rds-comp-security.component';

describe('RdsSecurityComponent', () => {
  let component: RdsSecurityComponent;
  let fixture: ComponentFixture<RdsSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
