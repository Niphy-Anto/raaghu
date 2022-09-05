import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompOpenPositionComponent } from './rds-comp-open-position.component';

describe('RdsCompOpenPositionComponent', () => {
  let component: RdsCompOpenPositionComponent;
  let fixture: ComponentFixture<RdsCompOpenPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompOpenPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompOpenPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
