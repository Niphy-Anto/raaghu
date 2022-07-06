import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsLabelComponent } from './rds-label.component';

describe('RdsLabelComponent', () => {
  let component: RdsLabelComponent;
  let fixture: ComponentFixture<RdsLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
