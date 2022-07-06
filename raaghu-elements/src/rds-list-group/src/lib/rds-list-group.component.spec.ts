import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsListGroupComponent } from './rds-list-group.component';

describe('RdsListGroupComponent', () => {
  let component: RdsListGroupComponent;
  let fixture: ComponentFixture<RdsListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsListGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
