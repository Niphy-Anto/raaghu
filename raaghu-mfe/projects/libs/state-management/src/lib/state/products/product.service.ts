import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Product } from "./product.models";



@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {}

    getProducts() {
        return this.http.get('https://fakestoreapi.com/products').pipe(map((r: any[]) => {
            return r.map(r => {
                return {
                    name: r.title,
                    price: r.price
                } as Product
            })
        }));
    }

}