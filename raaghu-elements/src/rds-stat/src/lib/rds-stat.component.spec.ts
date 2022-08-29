import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsStatComponent } from './rds-stat.component';

describe('RdsStatComponent', () => {
  let component: RdsStatComponent;
  let fixture: ComponentFixture<RdsStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
