import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsTestimonialComponent } from './rds-testimonial.component';

describe('RdsTestimonialComponent', () => {
  let component: RdsTestimonialComponent;
  let fixture: ComponentFixture<RdsTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
