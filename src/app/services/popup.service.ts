import { Injectable } from '@angular/core';
import { Order } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  isEditItem: boolean = false
  editItem: Order

  constructor() { }
}
