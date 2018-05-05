import { FlightBookingModule } from './flight-booking.module';
import { Observable } from "rxjs";
import { Flight } from "../entities/flight";
import { Injectable } from "@angular/core";
import { AdvancedFlightService } from "./adv-flight.service";
import { HttpClient } from "@angular/common/http";
import { FlightApiModule } from '../flight-api/flight-api.module';

@Injectable({ 
    providedIn: FlightApiModule,
    useClass: AdvancedFlightService,
    deps: [HttpClient]
})
export abstract class AbstractFlightService  {

    abstract flights: Flight[];
    abstract load(from: string, to: string): void;
    abstract find(from: string, to: string): Observable<Flight[]>;

}