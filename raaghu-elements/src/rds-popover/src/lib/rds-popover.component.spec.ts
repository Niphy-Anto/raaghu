import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsPopoverComponent } from './rds-popover.component';

describe('RdsPopoverComponent', () => {
  let component: RdsPopoverComponent;
  let fixture: ComponentFixture<RdsPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
