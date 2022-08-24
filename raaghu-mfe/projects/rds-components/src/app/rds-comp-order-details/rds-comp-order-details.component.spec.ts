import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompOrderDetailsComponent } from './rds-comp-order-details.component';

describe('RdsCompOrderDetailsComponent', () => {
  let component: RdsCompOrderDetailsComponent;
  let fixture: ComponentFixture<RdsCompOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
