import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompAddressInputShimmerComponent } from './rds-comp-address-input-shimmer.component';

describe('RdsCompAddressInputShimmerComponent', () => {
  let component: RdsCompAddressInputShimmerComponent;
  let fixture: ComponentFixture<RdsCompAddressInputShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompAddressInputShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompAddressInputShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
