import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompSubscriptionShimmerComponent } from './rds-comp-subscription-shimmer.component';

describe('RdsCompSubscriptionShimmerComponent', () => {
  let component: RdsCompSubscriptionShimmerComponent;
  let fixture: ComponentFixture<RdsCompSubscriptionShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompSubscriptionShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompSubscriptionShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
