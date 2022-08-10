import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompPersonalInfoComponent } from './rds-comp-personal-info.component';

describe('RdsCompPersonalInfoComponent', () => {
  let component: RdsCompPersonalInfoComponent;
  let fixture: ComponentFixture<RdsCompPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompPersonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
