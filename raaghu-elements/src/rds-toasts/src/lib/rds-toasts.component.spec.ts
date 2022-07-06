import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsToastsComponent } from './rds-toasts.component';

describe('RdsToastsComponent', () => {
  let component: RdsToastsComponent;
  let fixture: ComponentFixture<RdsToastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsToastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
