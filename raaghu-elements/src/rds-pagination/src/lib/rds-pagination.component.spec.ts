import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsPaginationComponent } from './rds-pagination.component';

describe('RdsPaginationComponent', () => {
  let component: RdsPaginationComponent;
  let fixture: ComponentFixture<RdsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
