import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../product.service";
import { productActionLoad, productActionLoadOnFail, productActionLoadOnSuccess } from "./product.action";
import { catchError, from, map, mergeMap, of, switchMap, toArray } from "rxjs";
import { ProductStateModel } from "./product.state";

@Injectable()
export class ProductEffect {

    constructor(private actions: Actions, private productService: ProductService) { }



    loadProductEffect = createEffect(() => {

        return this.actions.pipe(ofType(productActionLoad), mergeMap(() => {

            return this.productService.getAll().pipe(
            switchMap(sm => from(sm)), map(m => {
                return { id: m.id, name: m.name, price: m.price } as ProductStateModel

            }),
             toArray(), 
             map(m => productActionLoadOnSuccess({ products: m })),
             catchError(err=> of(productActionLoadOnFail({error:err}))))

        }))
    })




}