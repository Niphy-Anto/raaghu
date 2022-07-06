import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsNavTabComponent } from './rds-nav-tab.component';

describe('RdsNavTabComponent', () => {
  let component: RdsNavTabComponent;
  let fixture: ComponentFixture<RdsNavTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsNavTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsNavTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
