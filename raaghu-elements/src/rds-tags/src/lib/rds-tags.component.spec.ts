import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsTagsComponent } from './rds-tags.component';

describe('RdsTagsComponent', () => {
  let component: RdsTagsComponent;
  let fixture: ComponentFixture<RdsTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
