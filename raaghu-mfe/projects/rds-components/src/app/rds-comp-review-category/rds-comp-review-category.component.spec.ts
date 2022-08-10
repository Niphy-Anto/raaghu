import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompReviewCategoryComponent } from './rds-comp-review-category.component';

describe('RdsCompReviewCategoryComponent', () => {
  let component: RdsCompReviewCategoryComponent;
  let fixture: ComponentFixture<RdsCompReviewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompReviewCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompReviewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
