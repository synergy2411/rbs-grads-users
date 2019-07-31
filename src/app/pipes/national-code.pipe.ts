import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalCode'
})
export class NationalCodePipe implements PipeTransform {

  transform(value: any, code : string): any {
    switch(code) {
      case 'USA' : return "+1 " + value;
      case 'AUS' : return "+18 " + value;
      case 'EUR' : return "+51 " + value;
      default : return "+91 " + value;
    }

  }

}


// ng build
