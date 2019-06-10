import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripModule } from './trip/trip.module';
import { PlaceModule } from './place/place.module';
import { OtherModule } from './other/other.module';
import { MainModule } from './main/main.module';

import { AuthModule } from './auth/auth.module';
import { InzComponent } from './inz/inz.component';
import { InzRoutingModule } from './inz-routing.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FlipModule } from 'ngx-flip';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [
    InzComponent, 
    LayoutComponent,
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    FlipModule,
    InzRoutingModule,
    NgxGalleryModule
  ]
})
export class InzModule { }
