import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsFeedComponent } from './rds-feed.component';

describe('RdsFeedComponent', () => {
  let component: RdsFeedComponent;
  let fixture: ComponentFixture<RdsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
