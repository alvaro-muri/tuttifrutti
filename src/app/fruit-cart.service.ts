import { Injectable } from '@angular/core';
import { Fruit } from './fruit-list/Fruit'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitCartService {

  private _cartList: Fruit[] = [];
  cartList: BehaviorSubject<Fruit[]>=new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(fruit: Fruit){
    let item: Fruit = this._cartList.find((v1) => v1.name == fruit.name);
    if(!item)
      this._cartList.push({ ... fruit});
    else
      item.quantity+=fruit.quantity;

      this.cartList.next(this._cartList);
  }
}
