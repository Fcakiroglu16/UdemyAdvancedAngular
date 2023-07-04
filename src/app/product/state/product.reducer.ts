import { createReducer, on } from "@ngrx/store";
import { ProductState, ProductStateModel } from "./product.state";
import { productActionAdd, productActionLoadOnFail, productActionLoadOnSuccess, productActionRemove, productActionUpdate, productUpdateCurrency } from "./product.action";
import { act } from "@ngrx/effects";


const initialProductState:ProductState = {
    //productList: [{ id: 1, name: "kalem", price: 100 }, { id: 2, name: "kalem 2", price: 200 }],
    productList:[],
    currency: "tr",
    error:undefined
    

    

}

export const productReducer = createReducer<ProductState>(initialProductState,


    on(productActionAdd, (state, action): ProductState => {
        //spread operator
        console.log(" productActionAdd Orginal State", state);
        return { ...state, productList: [...state.productList, action.productToAdd] }
    }),
    on(productActionRemove, (state, action): ProductState => {
        console.log("productActionRemove Orginal State", state);
        return { ...state, productList: state.productList.filter(x => x.id != action.IdToDelete) }
    }),
    on(productActionUpdate, (state, action): ProductState => {
        const updatedProductsList = state.productList.map(product => product.id == action.productToUpdate.id ? action.productToUpdate : product)
        console.log("productActionUpdate Orginal State", state);
        return { ...state, productList: updatedProductsList }
    }),
    on(productUpdateCurrency, (state, action): ProductState => {
        console.log("productUpdateCurrency Orginal State", state);
        return { ...state, currency: action.currencyToUpdate };
    }),

    on(productActionLoadOnSuccess, (state, action): ProductState => {
        return { ...state, productList: action.products };
    }),

    on(productActionLoadOnFail, (state, action): ProductState => {
        return { ...state, error:action.error };
    }),
















)