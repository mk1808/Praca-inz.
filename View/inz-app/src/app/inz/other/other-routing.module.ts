import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotConifrmedPlacesComponent } from './not-conifrmed-places/not-conifrmed-places.component';
import { AllPlacesAdminComponent } from './all-places-admin/all-places-admin.component';

const routes: Routes = [
    {

        path: "not-confirmed",
        component: NotConifrmedPlacesComponent

    },
    {

        path: "all-places-adm",
        component: AllPlacesAdminComponent

    }]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OtherRoutingModule { }