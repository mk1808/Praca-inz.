import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import { TripRoutingModule } from './trip-routing.module';
import { PhotosOnHoverComponent } from './trip/photos-on-hover/photos-on-hover.component';

@NgModule({
  declarations: [TripComponent, PhotosOnHoverComponent],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule { }
