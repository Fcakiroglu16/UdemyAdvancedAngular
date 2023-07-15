import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() productList:Product[]=[];
  @Output() itemSelectedEvent= new EventEmitter<number>()

  itemSelected(id:number)
  {
 this.itemSelectedEvent.emit(id)
  }
}
