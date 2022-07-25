import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsRatingComponent } from './rds-rating.component';

describe('RdsRatingComponent', () => {
  let component: RdsRatingComponent;
  let fixture: ComponentFixture<RdsRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
