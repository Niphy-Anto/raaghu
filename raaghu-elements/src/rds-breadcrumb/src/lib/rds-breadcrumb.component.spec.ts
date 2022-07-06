import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsBreadcrumbComponent } from './rds-breadcrumb.component';

describe('RdsBreadcrumbComponent', () => {
  let component: RdsBreadcrumbComponent;
  let fixture: ComponentFixture<RdsBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
