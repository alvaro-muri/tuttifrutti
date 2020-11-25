import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { Fruit } from '../fruit-list/Fruit';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number>=new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string>=new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity():void{
    if(this.max>this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else
    this.maxReached.emit("you reached the top ");
  }

  downQuantity():void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event):void{
    if((event.keyCode>57 || event.keyCode<48) && (event.keyCode<96 || event.key>105) || this.quantity>this.max){
      this.quantity=0;
    }
      this.quantityChange.emit(this.quantity);
  }
}
