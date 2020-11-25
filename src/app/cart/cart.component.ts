import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit-list/Fruit';
import { FruitCartService } from '../fruit-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Fruit[]>;

  constructor(private cart: FruitCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }


  ngOnInit(): void {
  }

}
