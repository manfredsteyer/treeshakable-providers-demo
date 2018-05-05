import { FlightService } from './../flight.service';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  // providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  
  // *ngFor="let f of flights"

  selectedFlight: Flight;
  
  basket = {
    "3": true,
    "5": true
  };

  //private http: HttpClient;

  constructor(private flightService: FlightService) { 
    //this.http = http;
  }

  ngOnInit() {
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

  get flights(): Array<Flight> {
    return this.flightService.flights;
  }

  search(): void {
    this.flightService.load(
      this.from, 
      this.to);
  }

}
