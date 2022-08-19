import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsTeamMemberComponent } from './rds-team-member.component';

describe('RdsTeamMemberComponent', () => {
  let component: RdsTeamMemberComponent;
  let fixture: ComponentFixture<RdsTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsTeamMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
