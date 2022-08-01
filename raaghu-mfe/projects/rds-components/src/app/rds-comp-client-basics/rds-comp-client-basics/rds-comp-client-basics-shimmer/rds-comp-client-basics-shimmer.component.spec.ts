import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompClientBasicsShimmerComponent } from './rds-comp-client-basics-shimmer.component';

describe('RdsCompClientBasicsShimmerComponent', () => {
  let component: RdsCompClientBasicsShimmerComponent;
  let fixture: ComponentFixture<RdsCompClientBasicsShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompClientBasicsShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompClientBasicsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
