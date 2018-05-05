import { IBookingService } from './../flight-api/flight-api.tokens';
import { Flight } from './../entities/flight';
import { FlightService } from './flight.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BookingService implements IBookingService {

    constructor(private flightService: FlightService) { }

    book(flight: Flight): void {
        console.debug('flightService', this.flightService);
    }
}
