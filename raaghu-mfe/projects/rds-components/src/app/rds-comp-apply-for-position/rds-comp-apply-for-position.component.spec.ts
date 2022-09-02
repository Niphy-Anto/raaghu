import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompApplyForPositionComponent } from './rds-comp-apply-for-position.component';

describe('RdsCompApplyForPositionComponent', () => {
  let component: RdsCompApplyForPositionComponent;
  let fixture: ComponentFixture<RdsCompApplyForPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompApplyForPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompApplyForPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
