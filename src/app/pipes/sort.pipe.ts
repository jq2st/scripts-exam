import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../interfaces/interfaces';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: Order[]): any {

    let first = []
    let second = []
    
    value.forEach(m => {
      if (m.status == true) {
        first.push(m)
      } 
      else {
        second.push(m)
      }
    })

    first = first.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      else return 0
    })

    second = second.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      else return 0
    })

    first.forEach(element => {
      second.push(element)
    });

    return second;
  }

}
