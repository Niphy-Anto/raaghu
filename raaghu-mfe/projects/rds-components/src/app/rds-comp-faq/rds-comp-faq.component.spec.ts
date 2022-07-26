import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompFaqComponent } from './rds-comp-faq.component';

describe('RdsCompFaqComponent', () => {
  let component: RdsCompFaqComponent;
  let fixture: ComponentFixture<RdsCompFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
