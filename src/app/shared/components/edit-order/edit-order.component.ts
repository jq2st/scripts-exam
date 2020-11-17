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
      status: this.item.status
    }
    this.onEdit.emit(item)
  }

  closePopup() {
    this.popupService.isEditItem = false
  }

}
