import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsProductImageComponent } from './rds-product-image.component';

describe('RdsProductImageComponent', () => {
  let component: RdsProductImageComponent;
  let fixture: ComponentFixture<RdsProductImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsProductImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
