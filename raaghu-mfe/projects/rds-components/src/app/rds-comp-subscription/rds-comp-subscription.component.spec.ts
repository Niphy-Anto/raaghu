import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompSubscriptionComponent } from './rds-comp-subscription.component';

describe('RdsCompSubscriptionComponent', () => {
  let component: RdsCompSubscriptionComponent;
  let fixture: ComponentFixture<RdsCompSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
