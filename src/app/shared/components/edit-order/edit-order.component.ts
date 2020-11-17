import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from 'src/app/interfaces/interfaces';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  @Output() onEdit = new EventEmitter<Order>()
  @Output() onDelete = new EventEmitter<Order>()
  item: Order
  form: FormGroup

  constructor(private popupService: PopupService) { }

  ngOnInit() {
    this.item = this.popupService.editItem
    this.form = new FormGroup({
      name: new FormControl(this.item.name, Validators.required),
      amount: new FormControl(this.item.amount, Validators.required)
    })
  }

  editItem() {
    let item = {
      ...this.form.value,
      status: this.item.status,
      id: this.item.id
    }
    this.onEdit.emit(item)
    this.closePopup()
  }

  deleteItem() {
    this.onDelete.emit(this.item)
    this.closePopup()
  }

  closePopup() {
    this.popupService.isEditItem = false
  }

}
