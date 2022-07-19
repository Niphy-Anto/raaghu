import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsLikeDislikeComponent } from './rds-like-dislike.component';

describe('RdsLikeDislikeComponent', () => {
  let component: RdsLikeDislikeComponent;
  let fixture: ComponentFixture<RdsLikeDislikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsLikeDislikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsLikeDislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
