import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompInformationComponent } from './rds-comp-information.component';

describe('RdsCompInformationComponent', () => {
  let component: RdsCompInformationComponent;
  let fixture: ComponentFixture<RdsCompInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
