import { Component, OnInit } from '@angular/core';
import { FruitCartService } from '../fruit-cart.service';
import { Fruit } from './Fruit';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit {
  fruits: Fruit[] = [
    {
      name:'Apple',
      country:'Argentina',
      price:12,
      stock:123,
      image:'assets/imagenes/apple.jpg',
      clearance:false,
      quantity:0,
    },
    {
      name:'Banana',
      country:'Brasil',
      price:120,
      stock:20,
      image:'assets/imagenes/banana.jpg',
      clearance:true,
      quantity:0,
    },
    {
      name:'Orange',
      country:'Argentina',
      price:10,
      stock:9,
      image:'assets/imagenes/orange.jpg',
      clearance:false,
      quantity:0,
    },
    {
      name:'Tangerine',
      country:'Argentina',
      price:12,
      stock:0,
      image:'assets/imagenes/tangerine.jpg',
      clearance:false,
      quantity:0,
    },
    {
      name:'Peach',
      country:'Chile',
      price:24,
      stock:30,
      image:'assets/imagenes/peach.jpg',
      clearance:true,
      quantity:0,
    },
    {
      name:'Strawberry',
      country:'Uruguay',
      price:26,
      stock:20,
      image:'assets/imagenes/strawberry.jpg',
      clearance:false,
      quantity:0,
    },
];

  constructor(private cart: FruitCartService) {
  }

  ngOnInit(): void {
  }

  addToCart(fruit: Fruit): void {
    this.cart.addToCart(fruit);
    fruit.stock -= fruit.quantity;
    fruit.quantity=0;
  }

  maxReached(m: string){
    alert(m);
  }
}
