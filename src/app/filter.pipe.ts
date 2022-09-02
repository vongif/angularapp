import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';
import { ProductosService } from './services/productos.service';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultPost=[];
    for (const producto of value.results ){
      if (producto.toLowerCase().indexOf(arg) > -1 ) {
        resultPost.push(producto);
      }
    }
    return resultPost
  }

}
