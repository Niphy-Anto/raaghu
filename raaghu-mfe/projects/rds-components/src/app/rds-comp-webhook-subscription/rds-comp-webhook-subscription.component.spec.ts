import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompWebhookSubscriptionComponent } from './rds-comp-webhook-subscription.component';

describe('RdsCompWebhookSubscriptionComponent', () => {
  let component: RdsCompWebhookSubscriptionComponent;
  let fixture: ComponentFixture<RdsCompWebhookSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompWebhookSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompWebhookSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
