import { NgModule } from '@angular/core';
import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store'


@NgModule({
  declarations: [PizzaOrderComponent],
  imports: [
    CommonModule,
  //  StoreModule.forFeature('pizza', pizzaReducer)
  ],
  exports:[PizzaOrderComponent],
  
})
export class PizzaModule { }
