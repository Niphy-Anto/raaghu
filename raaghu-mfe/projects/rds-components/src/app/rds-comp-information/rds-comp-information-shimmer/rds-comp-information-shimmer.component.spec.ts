import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompInformationShimmerComponent } from './rds-comp-information-shimmer.component';

describe('RdsCompInformationShimmerComponent', () => {
  let component: RdsCompInformationShimmerComponent;
  let fixture: ComponentFixture<RdsCompInformationShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompInformationShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompInformationShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
