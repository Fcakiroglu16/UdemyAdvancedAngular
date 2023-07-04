import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.state";


const getProductState= createFeatureSelector<ProductState>("ProductSliceState");


export const getProductsSelector= createSelector(getProductState,state=>state.productList);

export const getProductCurrencySelector= createSelector(getProductState,state=>state.currency);

export const getProductError= createSelector(getProductState,state=>state.error);

export const getProdcutByIdSelector= (productId:number)=>createSelector(getProductState,(state)=>{
return state.productList.find(x=>x.id==productId);
})

