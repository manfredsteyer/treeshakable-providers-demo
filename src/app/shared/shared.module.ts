import { CityPipe } from './pipes/city.pipe';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddressComponent } from './address/address.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
        AddressComponent,
        TestComponent,
        Test2Component
    ],
    providers: [],
    exports: [
        CityPipe
    ]
})
export class SharedModule {

}