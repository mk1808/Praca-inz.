import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import { TripRoutingModule } from './trip-routing.module';

@NgModule({
  declarations: [TripComponent],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule { }
