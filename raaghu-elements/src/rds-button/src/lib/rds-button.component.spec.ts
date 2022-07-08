import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsButtonComponent } from './rds-button.component';

describe('RdsButtonComponent', () => {
  let component: RdsButtonComponent;
  let fixture: ComponentFixture<RdsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
