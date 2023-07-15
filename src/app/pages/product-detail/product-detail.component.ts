import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() productDetail?:Product;

  // isShowProductDetail()
  // {
  //   return this.productDetail!=undefined;
  // }

  get isShowProductDetail() { return this.productDetail!=undefined;}
  //typescript get set
}
