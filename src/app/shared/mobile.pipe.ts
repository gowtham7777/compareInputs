import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobile'
})
export class MobilePipe implements PipeTransform {

  transform(tel: any, args?: any): any {

    if (!tel) {
      return '';
    }

    var value = tel.toString().trim().replace(/^\+/, '');

    if (value.match(/[^0-9]/)) {
      return tel;
    }
    var  areacode, number;

    switch (value.length) {
      case 1:
      case 2:
      case 3:
        areacode = value;
        break;

      default:
        areacode = value.slice(0, 3);
        number = value.slice(3);
    }

    if (number) {
      if (number.length > 3) {
        number = number.slice(0, 3) + '-' + number.slice(3, 7);
      }
      else {
        number = number;
      }

      return ( "(" + areacode + ") " + number).trim();
    }
    else {
      return areacode;
    }
  }

}
