import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsSideNavComponent } from './rds-side-nav.component';

describe('RdsSideNavComponent', () => {
  let component: RdsSideNavComponent;
  let fixture: ComponentFixture<RdsSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
