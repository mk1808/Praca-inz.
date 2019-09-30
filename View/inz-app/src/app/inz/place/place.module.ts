import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place/place.component';
import { PlaceRoutingModule } from './place-routing.module';
import { NgxGalleryModule } from 'ngx-gallery';
import { StarRatingModule } from 'angular-star-rating';
import { AgmCoreModule } from '@agm/core';
import { NgxEqualizerModule } from 'ngx-equalizer';
import { NewPlaceComponent } from './new-place/new-place.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PlaceComponent, NewPlaceComponent, AddPlaceComponent],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    NgxGalleryModule,
    StarRatingModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsLVzxs5lP8tAr0ErPMYOhBORJ-OoT0Ts'
    }),
    NgxEqualizerModule,
    ReactiveFormsModule    
  ], 
  entryComponents: [

    AddPlaceComponent
  ],
})
export class PlaceModule { }
