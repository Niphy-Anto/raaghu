import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTeamsComponent } from './rds-comp-teams.component';

describe('RdsCompTeamsComponent', () => {
  let component: RdsCompTeamsComponent;
  let fixture: ComponentFixture<RdsCompTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
