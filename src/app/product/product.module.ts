import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAComponent } from './product-a/product-a.component';
import { ProductBComponent } from './product-b/product-b.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './state/product.effect';



@NgModule({
  declarations: [
    ProductAComponent,
    ProductBComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("ProductSliceState",productReducer),
    EffectsModule.forFeature([ProductEffect])
  ]
})
export class ProductModule { }
