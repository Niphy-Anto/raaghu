import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsAppDetailsComponent } from './rds-app-details.component';

describe('RdsAppDetailsComponent', () => {
  let component: RdsAppDetailsComponent;
  let fixture: ComponentFixture<RdsAppDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsAppDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsAppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
