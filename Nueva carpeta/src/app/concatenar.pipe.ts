import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenar'
})
export class ConcatenarPipe implements PipeTransform {

  transform(value: string, ...args: String[]): string {
    console.log(args)
    if (args[0]){
      return value+args[0]
    }
    return value + "Hola Mundo";
  }

}
