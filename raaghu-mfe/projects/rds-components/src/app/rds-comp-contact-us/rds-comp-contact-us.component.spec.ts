import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompContactUsComponent } from './rds-comp-contact-us.component';

describe('RdsCompContactUsComponent', () => {
  let component: RdsCompContactUsComponent;
  let fixture: ComponentFixture<RdsCompContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
