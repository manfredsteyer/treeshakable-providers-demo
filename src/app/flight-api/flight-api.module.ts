import { HttpClient } from '@angular/common/http';
import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerFlightServiceFactory } from './multi.token';
import { FlightService } from '../flight-booking/flight.service';
import { AdvancedFlightService } from '../flight-booking/adv-flight.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class FlightApiModule { 

  constructor() {
  }
}
