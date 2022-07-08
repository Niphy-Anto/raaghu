import { createAction, props } from '@ngrx/store';
import { Product } from './product.models';

export const getProducts = createAction(
  '[Product List Component] GetProducts'
);

export const getProductsSuccess = createAction(
  '[Product List Component] GetProductsSuccess',
  props<{ products: Product[] }>()
);

export const getProductsError = createAction('[Product List Component] GetProductsError');


export const selectProduct = createAction(
  '[Product List Component] SelectProduct',
  props<{ selectedProduct: Product }>()
);
