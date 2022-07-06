import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompNewClaimTypeComponent } from './rds-comp-new-claim-type.component';

describe('RdsCompNewClaimTypeComponent', () => {
  let component: RdsCompNewClaimTypeComponent;
  let fixture: ComponentFixture<RdsCompNewClaimTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompNewClaimTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompNewClaimTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
