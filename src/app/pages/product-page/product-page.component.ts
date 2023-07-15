import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productList:Product[];
  productDetail?:Product;
  constructor(private productService:ProductService )
  {

this.productList=[];


  }
  ngOnInit(): void {
    
    this.productService.getAll().subscribe(x=>{
       this.productList=x
      console.log(this.productList);
      
      })
  }

  selectedProductItem(id:number)
  {
    this.productService.getById(id).subscribe(x=>this.productDetail=x)
  }
}
