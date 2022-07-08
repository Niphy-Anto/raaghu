import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "./product.service";
import * as ProductActions from './product.actions';
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ProductActions.getProducts),
        mergeMap(() => {
            return this.productService.getProducts().pipe(
                map(products => ProductActions.getProductsSuccess({ products }))
            );
        }),
    )
  );
}
