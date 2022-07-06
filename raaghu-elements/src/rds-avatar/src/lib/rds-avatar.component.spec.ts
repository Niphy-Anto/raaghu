import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsAvatarComponent } from './rds-avatar.component';

describe('RdsAvatarComponent', () => {
  let component: RdsAvatarComponent;
  let fixture: ComponentFixture<RdsAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
