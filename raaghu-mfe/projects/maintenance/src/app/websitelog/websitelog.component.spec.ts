import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitelogComponent } from './websitelog.component';

describe('WebsitelogComponent', () => {
  let component: WebsitelogComponent;
  let fixture: ComponentFixture<WebsitelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitelogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
