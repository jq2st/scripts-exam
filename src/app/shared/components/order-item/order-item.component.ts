import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/interfaces/interfaces';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input('item') item: Order
  @Output() onChange = new EventEmitter<Order>()

  constructor(private popupService: PopupService) { }

  ngOnInit() {
  }

  editThis() {
    this.popupService.isEditItem = true
    this.popupService.editItem = this.item
  }

}
