import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsButtonGroupComponent } from './rds-button-group.component';

describe('RdsButtonGroupComponent', () => {
  let component: RdsButtonGroupComponent;
  let fixture: ComponentFixture<RdsButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsButtonGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
