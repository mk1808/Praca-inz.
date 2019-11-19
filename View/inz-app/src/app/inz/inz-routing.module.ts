import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InzComponent } from './inz/inz.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
        {
                path: "",
                component: LayoutComponent, children: [
                        {
                                path: "place",
                                loadChildren: "./place/place.module#PlaceModule"
                        },
                        {
                                path: "",
                                loadChildren: "./main/main.module#MainModule"
                        },
                        {
                                path: "search",
                                loadChildren: "./main/main.module#MainModule"
                        },
                        {
                                path: "trip",
                                loadChildren: "./trip/trip.module#TripModule"

                        },
                        {
                                path: "auth",
                                loadChildren: "./auth/auth.module#AuthModule"

                        },
                        {
                                path: "admin",
                                loadChildren: "./other/other.module#OtherModule"

                        }

                ]
        }



]

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class InzRoutingModule { }