import { AppState } from "src/app/state/app.state";

export interface ProductState extends AppState {
    productList: ProductStateModel[];
    currency: string,
    error:any | undefined

}
export interface ProductStateModel {
    id: number;
    name: string;
    price: number;
}