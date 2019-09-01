import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DestinationSearchingResultsComponent } from './destination-searching-results/destination-searching-results.component';
import { AllPlacesComponent } from './all-places/all-places.component';

const routes: Routes = [
    {
        
            path: "",
            pathMatch:"full",
            component:MainComponent
      
    },
{
        
        path: "dest",
        component:DestinationSearchingResultsComponent

},
{
        
        path: "all-places",
        component:AllPlacesComponent

}
]


@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
      export class MainRoutingModule { }