import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsReviewCategoryComponent } from './rds-review-category.component';

describe('RdsReviewCategoryComponent', () => {
  let component: RdsReviewCategoryComponent;
  let fixture: ComponentFixture<RdsReviewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsReviewCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsReviewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
