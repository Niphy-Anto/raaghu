import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsInputComponent } from './rds-input.component';

describe('RdsInputComponent', () => {
  let component: RdsInputComponent;
  let fixture: ComponentFixture<RdsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
