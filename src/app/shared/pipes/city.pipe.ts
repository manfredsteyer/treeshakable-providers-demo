import { Pipe, PipeTransform } from '@angular/core';
import { FlightService } from '../../flight-booking/flight.service';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  constructor(flightService: FlightService) {

  }

  transform(value: string, fmt: string, lang: string): string {
    
    let long, short;

    switch(value) {
      case 'Hamburg':
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        short = 'HAM'
      break;
      case 'Graz':
        long = 'Graz Thalerhof';
        short = 'GRZ'
      break;
      case 'Nürnberg':
        long = 'Airport Nürnberg Albrecht Dürer';  
        if (lang && lang.toUpperCase() == 'EN') {
          long = 'Airport Nuremberg Albrecht Duerer';
        }
        short = 'NBG'

      break;
      default:
        long = short = value;
    }

    if (fmt === 'short') return short;
    return long;

  }

}
