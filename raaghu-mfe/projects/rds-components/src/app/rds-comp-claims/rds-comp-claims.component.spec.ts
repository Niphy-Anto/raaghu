import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompClaimsComponent } from './rds-comp-claims.component';

describe('RdsCompClaimsComponent', () => {
  let component: RdsCompClaimsComponent;
  let fixture: ComponentFixture<RdsCompClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompClaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
