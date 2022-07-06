import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsAccordionComponent } from './rds-accordion.component';

describe('RdsAccordionComponent', () => {
  let component: RdsAccordionComponent;
  let fixture: ComponentFixture<RdsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
