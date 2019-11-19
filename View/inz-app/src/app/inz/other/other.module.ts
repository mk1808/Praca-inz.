import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotConifrmedPlacesComponent } from './not-conifrmed-places/not-conifrmed-places.component';
import { AllPlacesAdminComponent } from './all-places-admin/all-places-admin.component';
import { OtherRoutingModule } from './other-routing.module';

@NgModule({
  declarations: [NotConifrmedPlacesComponent, AllPlacesAdminComponent],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
