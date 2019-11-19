import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotConifrmedPlacesComponent } from './not-conifrmed-places/not-conifrmed-places.component';
import { AllPlacesAdminComponent } from './all-places-admin/all-places-admin.component';

@NgModule({
  declarations: [NotConifrmedPlacesComponent, AllPlacesAdminComponent],
  imports: [
    CommonModule
  ]
})
export class OtherModule { }
