import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsSearchInputComponent } from './rds-search-input.component';

describe('RdsSearchInputComponent', () => {
  let component: RdsSearchInputComponent;
  let fixture: ComponentFixture<RdsSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsSearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
