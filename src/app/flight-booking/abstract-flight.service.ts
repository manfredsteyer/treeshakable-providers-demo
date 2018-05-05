import { Observable } from "rxjs";
import { Flight } from "../entities/flight";
import { Injectable } from "@angular/core";
import { AdvancedFlightService } from "./adv-flight.service";
import { HttpClient } from "@angular/common/http";

@Injectable({ 
    providedIn: 'root',
    useClass: AdvancedFlightService,
    deps: [HttpClient]
})
export abstract class AbstractFlightService  {

    abstract flights: Flight[];
    abstract load(from: string, to: string): void;
    abstract find(from: string, to: string): Observable<Flight[]>;

}