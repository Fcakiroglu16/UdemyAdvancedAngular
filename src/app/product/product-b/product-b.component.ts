import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from '../state/product.state';
import { getProductCurrencySelector } from '../state/product.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-b',
  templateUrl: './product-b.component.html',
  styleUrls: ['./product-b.component.css']
})
export class ProductBComponent implements OnInit {

  currency?:Observable<string>
  constructor(private productStore: Store<ProductState>) {

  }
  ngOnInit(): void {
    
  this.currency = this.productStore.select(getProductCurrencySelector);


  }


}
