import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsIconLabelComponent } from './rds-icon-label.component';

describe('RdsIconLabelComponent', () => {
  let component: RdsIconLabelComponent;
  let fixture: ComponentFixture<RdsIconLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsIconLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsIconLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
