import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place/place.component';
import { PlaceRoutingModule } from './place-routing.module';
import { NgxGalleryModule } from 'ngx-gallery';
import { StarRatingModule } from 'angular-star-rating';
import { AgmCoreModule } from '@agm/core';
import { NgxEqualizerModule } from 'ngx-equalizer';


@NgModule({
  declarations: [PlaceComponent],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    NgxGalleryModule,
    StarRatingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsLVzxs5lP8tAr0ErPMYOhBORJ-OoT0Ts'
    }),
    NgxEqualizerModule    
  ]
})
export class PlaceModule { }
