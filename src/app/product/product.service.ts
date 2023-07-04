import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private productList: Product[] = [
    { id: 1, name: "kalem 1", price: 100, stock: 10, category: "kalemler" },
    { id: 2, name: "kalem 2", price: 200, stock: 10, category: "kalemler" },
    { id: 3, name: "kalem 3", price: 300, stock: 10, category: "kalemler" }


  ]


  getAll(): Observable<Product[]> {

    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts").pipe(map(m => {

      console.log(m);
      return this.productList;
    }));
  }
}
