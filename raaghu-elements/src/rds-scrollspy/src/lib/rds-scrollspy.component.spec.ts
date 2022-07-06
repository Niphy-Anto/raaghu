import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsScrollspyComponent } from './rds-scrollspy.component';

describe('RdsScrollspyComponent', () => {
  let component: RdsScrollspyComponent;
  let fixture: ComponentFixture<RdsScrollspyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsScrollspyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsScrollspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
