import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { Counter2Component } from './pages/counter2/counter2.component';
import { ProductAComponent } from './product/product-a/product-a.component';
import { ProductBComponent } from './product/product-b/product-b.component';

const routes: Routes = [

  {
    path: "counter1-page", component: CounterComponent
  },
  {
    path: "counter2-page", component: Counter2Component
  },
  {
    path: "product", children: [

      { path: "a", component: ProductAComponent },
      { path: "b", component: ProductBComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
