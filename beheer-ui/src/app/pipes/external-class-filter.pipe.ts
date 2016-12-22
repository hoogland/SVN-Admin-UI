import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'externalClassFilter'
})
export class ExternalClassFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let knsb = args;
    return value.filter(klasse =>{
      return klasse.knsb == knsb;
    });
  }
}
