import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsBenefitComponent } from './rds-benefit.component';

describe('RdsBenefitComponent', () => {
  let component: RdsBenefitComponent;
  let fixture: ComponentFixture<RdsBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsBenefitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
