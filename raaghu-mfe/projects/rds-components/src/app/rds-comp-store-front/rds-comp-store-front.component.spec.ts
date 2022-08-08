import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompStoreFrontComponent } from './rds-comp-store-front.component';

describe('RdsCompStoreFrontComponent', () => {
  let component: RdsCompStoreFrontComponent;
  let fixture: ComponentFixture<RdsCompStoreFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompStoreFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompStoreFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
