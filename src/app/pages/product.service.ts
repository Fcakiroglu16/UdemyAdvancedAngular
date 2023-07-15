import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 


  }

getAll()
{

  return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/posts')
}

getById(id:number)
{
  return this.http.get<Product>(`https://jsonplaceholder.typicode.com/posts/${id}`)
}


}
