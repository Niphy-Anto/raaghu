import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsOffcanvasComponent } from './rds-offcanvas.component';

describe('RdsOffcanvasComponent', () => {
  let component: RdsOffcanvasComponent;
  let fixture: ComponentFixture<RdsOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsOffcanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
