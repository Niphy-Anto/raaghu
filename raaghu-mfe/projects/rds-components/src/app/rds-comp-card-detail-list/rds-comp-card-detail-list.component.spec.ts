import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompCardDetailListComponent } from './rds-comp-card-detail-list.component';

describe('RdsCompCardDetailListComponent', () => {
  let component: RdsCompCardDetailListComponent;
  let fixture: ComponentFixture<RdsCompCardDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompCardDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompCardDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
