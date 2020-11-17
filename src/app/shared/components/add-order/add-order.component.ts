import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  @Output() onAdd = new EventEmitter<Order>()

  form: FormGroup

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    })
  }

  addItem() {
    let item = {
      ...this.form.value,
      status: false
    }
    this.onAdd.emit(item)
  }

}
