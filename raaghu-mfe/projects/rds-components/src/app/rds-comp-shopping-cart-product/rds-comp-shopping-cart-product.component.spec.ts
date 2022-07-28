import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompShoppingCartProductComponent } from './rds-comp-shopping-cart-product.component';

describe('RdsCompShoppingCartProductComponent', () => {
  let component: RdsCompShoppingCartProductComponent;
  let fixture: ComponentFixture<RdsCompShoppingCartProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompShoppingCartProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompShoppingCartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
