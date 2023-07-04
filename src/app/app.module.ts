import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer, userReducer } from './state/app.reducers';
import { CounterComponent } from './pages/counter/counter.component';
import { Counter2Component } from './pages/counter2/counter2.component';
import { ProductModule } from './product/product.module';
import{ HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    Counter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    StoreModule.forRoot({"counterStoreSlice":counterReducer,"userStoreSlice":userReducer}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
