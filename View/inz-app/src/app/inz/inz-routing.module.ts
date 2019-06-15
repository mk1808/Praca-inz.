import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InzComponent } from './inz/inz.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
        {
                path: "",
                 component: LayoutComponent, children: [
                        {
                                path: "",
                                pathMatch:"full",
                                loadChildren: "./main/main.module#MainModule"
                        },
                        {
                                path:"place",
                                loadChildren:"./place/place.module#PlaceModule"

                        },
                        {
                                path:"trip",
                                loadChildren:"./trip/trip.module#TripModule"

                        },
                        {
                                path:"auth",
                                loadChildren:"./auth/auth.module#AuthModule"

                        }

                ]
        }
        
               

        ]

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class InzRoutingModule { }