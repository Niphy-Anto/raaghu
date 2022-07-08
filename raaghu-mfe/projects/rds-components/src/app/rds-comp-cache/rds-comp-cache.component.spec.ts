import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompCacheComponent } from './rds-comp-cache.component';

describe('RdsCompCacheComponent', () => {
  let component: RdsCompCacheComponent;
  let fixture: ComponentFixture<RdsCompCacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompCacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
