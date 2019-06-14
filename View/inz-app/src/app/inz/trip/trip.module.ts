import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import { TripRoutingModule } from './trip-routing.module';
import { PhotosOnHoverComponent } from './trip/photos-on-hover/photos-on-hover.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [TripComponent, PhotosOnHoverComponent],
  imports: [
    CommonModule,
    TripRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsLVzxs5lP8tAr0ErPMYOhBORJ-OoT0Ts'
      
    })
  ]
})
export class TripModule { }
