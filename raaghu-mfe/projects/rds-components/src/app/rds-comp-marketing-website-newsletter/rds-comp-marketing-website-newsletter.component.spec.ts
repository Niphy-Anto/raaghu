import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompMarketingWebsiteNewsletterComponent } from './rds-comp-marketing-website-newsletter.component';

describe('RdsCompMarketingWebsiteNewsletterComponent', () => {
  let component: RdsCompMarketingWebsiteNewsletterComponent;
  let fixture: ComponentFixture<RdsCompMarketingWebsiteNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompMarketingWebsiteNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompMarketingWebsiteNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
