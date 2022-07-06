import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsBannerComponent } from './rds-banner.component';

describe('RdsBannerComponent', () => {
  let component: RdsBannerComponent;
  let fixture: ComponentFixture<RdsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
