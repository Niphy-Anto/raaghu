import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsPriceComponent } from './rds-price.component';

describe('RdsPriceComponent', () => {
  let component: RdsPriceComponent;
  let fixture: ComponentFixture<RdsPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
