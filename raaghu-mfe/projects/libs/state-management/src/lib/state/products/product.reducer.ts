import { createReducer, on } from '@ngrx/store';

import * as ProductActions from './product.actions';
import { Product } from './product.models';

export interface ProductState {
  products: Product[];
  selectedProduct: Product;
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.getProducts, (state) => ({
    ...state,
    products: [
      { name: 'Product 1', price: 34 } as Product,
      { name: 'Product 2', price: 54 } as Product,
      { name: 'Product 3', price: 74 } as Product,
      { name: 'Product 4', price: 134 } as Product,
    ],
  })),
  on(ProductActions.selectProduct, (state, { selectedProduct }) => {
    return {
      ...state,
      selectedProduct: selectedProduct,
    };
  }),
  on(ProductActions.getProductsSuccess, (state, action) => ({
    ...state,
    products: action.products
  }))
);
