import { Type, InjectionToken, inject } from "@angular/core";
import { FlightService } from "../flight-booking/flight.service";
import { FlightApiModule } from "./flight-api.module";
import { HttpClient } from "@angular/common/http";
import { AbstractFlightService } from "../flight-booking/abstract-flight.service";

type FlightServiceFactory = () => AbstractFlightService;

const flightServiceFactories: FlightServiceFactory[] = [];

export function registerFlightServiceFactory(factory: FlightServiceFactory): void {
    flightServiceFactories.push(factory);
}

export const FLIGHT_SERVICES = new InjectionToken<AbstractFlightService[]>('FLIGHT_SERVICE',
    { 
        providedIn: FlightApiModule, 
        factory: () => flightServiceFactories.map(factory => factory())
    }
);

/*
 * Register default implementation. We always get this one but it's also treeshakable
 * if no own uses it.
*/
registerFlightServiceFactory(() => new FlightService(inject(HttpClient)));