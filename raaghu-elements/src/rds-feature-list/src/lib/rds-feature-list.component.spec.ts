import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsFeatureListComponent } from './rds-feature-list.component';

describe('RdsFeatureListComponent', () => {
  let component: RdsFeatureListComponent;
  let fixture: ComponentFixture<RdsFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsFeatureListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
