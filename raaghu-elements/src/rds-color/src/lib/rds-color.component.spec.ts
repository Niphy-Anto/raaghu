import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsColorComponent } from './rds-color.component';

describe('RdsColorComponent', () => {
  let component: RdsColorComponent;
  let fixture: ComponentFixture<RdsColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
