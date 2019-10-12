import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripComponent } from './trip/trip.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
        {

                path: "details/:id", 
                component:TripComponent

        },
        {

                path: "all",
                component: TripListComponent

        },
        {

                path: "new",
                component: NewTripComponent

        },
        {

                path: "new-schedule/:id",
                component: AddScheduleComponent

        },

        {

                path: "schedule/:id",
                component: ScheduleComponent

        }]


@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class TripRoutingModule { }