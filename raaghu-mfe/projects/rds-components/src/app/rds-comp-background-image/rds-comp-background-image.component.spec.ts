import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompBackgroundImageComponent } from './rds-comp-background-image.component';

describe('RdsCompBackgroundImageComponent', () => {
  let component: RdsCompBackgroundImageComponent;
  let fixture: ComponentFixture<RdsCompBackgroundImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompBackgroundImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
