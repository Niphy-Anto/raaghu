import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompFeedsComponent } from './rds-comp-feeds.component';

describe('RdsCompFeedsComponent', () => {
  let component: RdsCompFeedsComponent;
  let fixture: ComponentFixture<RdsCompFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompFeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
