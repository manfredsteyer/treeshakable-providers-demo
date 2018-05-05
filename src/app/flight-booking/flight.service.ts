import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../entities/flight';

@Injectable()
export class FlightService {

    flights: Flight[] = [];

    constructor(private http: HttpClient) { }

    load(from: string, to: string): void {
        this.find(from, to).subscribe(
            flights => { this.flights = flights; },
            err => { console.error('Error loading flights', err ); }
        )
    }

    find(from: string, to: string): Observable<Flight[]> {
        let url = 'http://www.angular.at/api/flight';
        let params = { from, to };
        let headers = { accept: 'application/json'};
        return this.http.get<Flight[]>(url, { params, headers });
    } 

}
