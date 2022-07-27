import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsPopularPagesComponent } from './rds-popular-pages.component';

describe('RdsPopularPagesComponent', () => {
  let component: RdsPopularPagesComponent;
  let fixture: ComponentFixture<RdsPopularPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsPopularPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsPopularPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
