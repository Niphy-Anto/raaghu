import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompMemberActivityComponent } from './rds-comp-member-activity.component';

describe('RdsCompMemberActivityComponent', () => {
  let component: RdsCompMemberActivityComponent;
  let fixture: ComponentFixture<RdsCompMemberActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompMemberActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompMemberActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
