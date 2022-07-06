import { createFeatureSelector, createSelector } from '@ngrx/store';
import { products } from '../../app.interface';
import { ProductState } from './product.reducer';

const selectProducts = createFeatureSelector<ProductState>(products);

export const productsSelector = createSelector(
  selectProducts,
  (state: ProductState) => state.products
);

export const selectedProductSelector = createSelector(
  selectProducts,
  (state: ProductState) => state.selectedProduct
);
