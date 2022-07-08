import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsDataTableComponent } from './rds-comp-data-table.component';

describe('RdsDataTableComponent', () => {
  let component: RdsDataTableComponent;
  let fixture: ComponentFixture<RdsDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
