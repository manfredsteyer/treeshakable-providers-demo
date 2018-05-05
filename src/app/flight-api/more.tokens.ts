import { Flight } from "../entities/flight";
import { InjectionToken, inject } from "@angular/core";
import { BookingService } from "../flight-booking/booking.service";
import { FlightApiModule } from "./flight-api.module";
import { AbstractFlightService } from "../flight-booking/abstract-flight.service";

// export interface IBooking {
//     book(flight: Flight): void;
// }

// export const IBooking = new InjectionToken<BookingService>('IBookingService',
//     { 
//         providedIn: FlightApiModule, 
//         factory: () => new BookingService(inject(<any>AbstractFlightService))
//     }
// );