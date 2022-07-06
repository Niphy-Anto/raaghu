import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsUserDelegationsComponent } from './rds-comp-user-delegations.component';

describe('RdsUserDelegationsComponent', () => {
  let component: RdsUserDelegationsComponent;
  let fixture: ComponentFixture<RdsUserDelegationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsUserDelegationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsUserDelegationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
