import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCarouselComponent } from './rds-carousel.component';

describe('RdsCarouselComponent', () => {
  let component: RdsCarouselComponent;
  let fixture: ComponentFixture<RdsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
