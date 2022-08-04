import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCardDetailComponent } from './rds-card-detail.component';

describe('RdsCardDetailComponent', () => {
  let component: RdsCardDetailComponent;
  let fixture: ComponentFixture<RdsCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
