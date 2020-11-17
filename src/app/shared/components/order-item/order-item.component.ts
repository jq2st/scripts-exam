import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input('item') item: Order

  constructor() { }

  ngOnInit() {
  }

}
