import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(items);
    console.log(searchText);
    if (!items || items.length <= 0) { return []; }
    if (!searchText) { return items; }

    // searchText = searchText.toLowerCase();
    //console.log(searchText);

    return items.filter(it => {
      return it.name.includes(searchText);
    });
  }

}
