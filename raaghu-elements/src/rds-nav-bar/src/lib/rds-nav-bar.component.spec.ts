import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsNavBarComponent } from './rds-nav-bar.component';

describe('RdsNavBarComponent', () => {
  let component: RdsNavBarComponent;
  let fixture: ComponentFixture<RdsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
