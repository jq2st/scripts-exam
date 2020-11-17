import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  form: FormGroup

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    })
  }

  addItem() {

  }

}
