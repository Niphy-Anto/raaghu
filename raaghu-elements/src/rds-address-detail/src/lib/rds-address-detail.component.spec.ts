import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsAddressDetailComponent } from './rds-address-detail.component';

describe('RdsAddressDetailComponent', () => {
  let component: RdsAddressDetailComponent;
  let fixture: ComponentFixture<RdsAddressDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsAddressDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsAddressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
