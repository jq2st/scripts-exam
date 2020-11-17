import { Component, OnInit } from '@angular/core';
import { Order } from '../interfaces/interfaces';
import { HttpService } from '../services/http.service';
import { map } from 'rxjs/operators'
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  items: Order[] = []
  editItem: Order
  isEditItem = false

  constructor(private httpService: HttpService, public popupService: PopupService) { }

  ngOnInit() {
    this.httpService.getOrders()
      .subscribe(list => {
        this.items = list
      })
  }

  changeStatus(id) {
    this.items
  }

  addOrder(item) {
    this.httpService.addOrder(item)
      .subscribe(item => {
        this.items.push(item)
      })
  }

  editOrder(item) {
    this.httpService.editOrder(item)
      .subscribe(n => {
        this.items.forEach((x, i) => {
          if (x.id == n.id) {
            this.items[i] = n
          }
        })
      }) 
  }

  deleteOrder(item) {
    this.httpService.deleteOrder(item)
      .subscribe(() => {
        this.items = this.items.filter(i => item.id != i.id)
      })
  }

}
