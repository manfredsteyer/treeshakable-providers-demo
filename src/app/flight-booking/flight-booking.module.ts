import { FlightApiModule } from './../flight-api/flight-api.module';
import { FlightService } from './flight.service';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { registerFlightServiceFactory } from '../flight-api/multi.token';
import { AdvancedFlightService } from './adv-flight.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule,
        RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
        FlightApiModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent, 
        PassengerSearchComponent,
        FlightEditComponent
    ],
    providers: [
    //    FlightService
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule {
    constructor() {
        // Additional Implementation
        registerFlightServiceFactory(() => new AdvancedFlightService(inject(HttpClient)));
    }
}