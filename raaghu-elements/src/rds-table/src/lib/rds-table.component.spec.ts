import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsTableComponent } from './rds-table.component';

describe('RdsTableComponent', () => {
  let component: RdsTableComponent;
  let fixture: ComponentFixture<RdsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
