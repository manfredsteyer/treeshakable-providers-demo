import { FlightApiModule } from './flight-api.module';
import { HttpClient } from '@angular/common/http';
import { FlightService } from './../flight-booking/flight.service';
import { FlightBookingModule } from './../flight-booking/flight-booking.module';
import { BookingService } from './../flight-booking/booking.service';
import { InjectionToken, inject } from "@angular/core";
import { AbstractFlightService } from '../flight-booking/abstract-flight.service';
import { Flight } from '../entities/flight';

export const FLIGHT_SERVICE = new InjectionToken<FlightService>('FLIGHT_SERVICE',
    { 
        providedIn: FlightApiModule, 
        factory: () => new FlightService(inject(HttpClient))
    }
);

export const BOOKING_SERVICE = new InjectionToken<BookingService>('BOOKING_SERVICE',
    { 
        providedIn: FlightApiModule, 
        factory: () => new BookingService(inject(<any>AbstractFlightService))
    }
);

export const IBookingService = new InjectionToken<BookingService>('IBookingService',
    { 
        providedIn: 'root', 
        factory: () => new BookingService(inject(<any>AbstractFlightService))
    }
);

export interface IBookingService {
    book(flight: Flight): void;
}


