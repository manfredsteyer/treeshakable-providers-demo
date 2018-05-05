import { Observable } from "rxjs";
import { Flight } from "../entities/flight";


export abstract class AbstractFlightService {

    abstract load(from: string, to: string): void;
    abstract find(from: string, to: string): Observable<Flight[]>;

}