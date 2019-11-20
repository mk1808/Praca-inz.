import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotConifrmedPlacesComponent } from './not-conifrmed-places/not-conifrmed-places.component';
import { AllPlacesAdminComponent } from './all-places-admin/all-places-admin.component';
import { OtherRoutingModule } from './other-routing.module';
import { ConfirmPlaceDialogComponent } from './not-conifrmed-places/confirm-place-dialog/confirm-place-dialog.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [NotConifrmedPlacesComponent, AllPlacesAdminComponent, ConfirmPlaceDialogComponent],
  imports: [
    CommonModule,
    OtherRoutingModule,
    MatDialogModule
  ],
  entryComponents: [
    ConfirmPlaceDialogComponent
  ]
})
export class OtherModule { }
