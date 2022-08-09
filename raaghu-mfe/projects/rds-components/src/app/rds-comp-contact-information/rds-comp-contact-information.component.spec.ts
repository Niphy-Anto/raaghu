import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompContactInformationComponent } from './rds-comp-contact-information.component';

describe('RdsCompContactInformationComponent', () => {
  let component: RdsCompContactInformationComponent;
  let fixture: ComponentFixture<RdsCompContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompContactInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
