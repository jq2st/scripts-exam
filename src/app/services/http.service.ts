import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  dblink = environment.firebaseConfig.databaseURL

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.dblink + '/list.json')
  }

}
