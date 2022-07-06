import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsInputGroupComponent } from './rds-input-group.component';

describe('RdsInputGroupComponent', () => {
  let component: RdsInputGroupComponent;
  let fixture: ComponentFixture<RdsInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsInputGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
