import { Component, OnInit } from '@angular/core';
import { Order } from '../interfaces/interfaces';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  items: Order[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getOrders()
      .subscribe(list => {
        this.items = list
      })
  }

  changeStatus(id) {
    this.items
  }

}
