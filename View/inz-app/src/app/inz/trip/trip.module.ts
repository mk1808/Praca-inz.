import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import { TripRoutingModule } from './trip-routing.module';
import { PhotosOnHoverComponent } from './trip/photos-on-hover/photos-on-hover.component';
import { AgmCoreModule } from '@agm/core';
import { TripListComponent } from './trip-list/trip-list.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { ScheduleComponent } from './schedule/schedule.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HourDialogComponent } from './add-schedule/hour-dialog/hour-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPlaceToTripDialogComponent } from './add-place-to-trip-dialog/add-place-to-trip-dialog.component';
import { AddPlaceComponent } from '../place/add-place/add-place.component'

@NgModule({
  declarations: [TripComponent, PhotosOnHoverComponent,
    TripListComponent, NewTripComponent, AddScheduleComponent, ScheduleComponent, HourDialogComponent,
    AddPlaceToTripDialogComponent],
  imports: [
    CommonModule,
    TripRoutingModule,
    DragDropModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsLVzxs5lP8tAr0ErPMYOhBORJ-OoT0Ts'

    })
  ],
  entryComponents: [
    HourDialogComponent,
    AddPlaceToTripDialogComponent
  ],
})
export class TripModule { }
