import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place/place.component';
import { PlaceRoutingModule } from './place-routing.module';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [PlaceComponent],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    NgxGalleryModule
    
  ]
})
export class PlaceModule { }
