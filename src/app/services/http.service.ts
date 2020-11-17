import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    .pipe(map(resp => {
      return Object
        .keys(resp)
        .map(key => ({
          ...resp[key],
          id: key
        }))
    }))
  }

  addOrder(item): Observable<Order> {
    return this.http.post<Order>(this.dblink + '/list.json', item)
    .pipe(map(resp => {
      return ({
        ...item,
        id: resp.name
      })
    }))
  }

  editOrder(item): Observable<Order> {
    return this.http.put<Order>(this.dblink + '/list/' + item.id + '.json', item)
  }

}
