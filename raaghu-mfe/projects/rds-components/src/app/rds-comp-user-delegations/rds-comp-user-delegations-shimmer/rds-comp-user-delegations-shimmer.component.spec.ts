import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompUserDelegationsShimmerComponent } from './rds-comp-user-delegations-shimmer.component';

describe('RdsCompUserDelegationsShimmerComponent', () => {
  let component: RdsCompUserDelegationsShimmerComponent;
  let fixture: ComponentFixture<RdsCompUserDelegationsShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompUserDelegationsShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompUserDelegationsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
