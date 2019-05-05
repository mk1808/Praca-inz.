import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripModule } from './trip/trip.module';
import { PlaceModule } from './place/place.module';
import { OtherModule } from './other/other.module';
import { MainModule } from './main/main.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { InzComponent } from './inz/inz.component';
import { InzRoutingModule } from './inz-routing.module';

@NgModule({
  declarations: [InzComponent],
  imports: [
    CommonModule,
    InzRoutingModule
  ]
})
export class InzModule { }
