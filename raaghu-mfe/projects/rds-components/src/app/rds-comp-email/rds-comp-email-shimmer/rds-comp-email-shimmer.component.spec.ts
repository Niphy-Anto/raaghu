import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompEmailShimmerComponent } from './rds-comp-email-shimmer.component';

describe('RdsCompEmailShimmerComponent', () => {
  let component: RdsCompEmailShimmerComponent;
  let fixture: ComponentFixture<RdsCompEmailShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompEmailShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompEmailShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
