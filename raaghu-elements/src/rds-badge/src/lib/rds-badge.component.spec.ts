import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsBadgeComponent } from './rds-badge.component';

describe('RdsBadgeComponent', () => {
  let component: RdsBadgeComponent;
  let fixture: ComponentFixture<RdsBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
