import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], search: string): any[] {
    if (!items || !search) {
      return items;
  }
  return items.filter(item => item.Product.toLowerCase().indexOf(search.toLowerCase()) !== -1);
}


}



