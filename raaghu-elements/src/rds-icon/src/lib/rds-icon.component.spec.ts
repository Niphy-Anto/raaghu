import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsIconComponent } from './rds-icon.component';

describe('RdsIconComponent', () => {
  let component: RdsIconComponent;
  let fixture: ComponentFixture<RdsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
