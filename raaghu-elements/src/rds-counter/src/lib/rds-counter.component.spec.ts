import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCounterComponent } from './rds-counter.component';

describe('RdsCounterComponent', () => {
  let component: RdsCounterComponent;
  let fixture: ComponentFixture<RdsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
