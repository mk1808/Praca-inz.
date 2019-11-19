import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceComponent } from './place/place.component';
import { NewPlaceComponent } from './new-place/new-place.component';

const routes: Routes = [
    {
        
            path: "details/:id", 
            component:PlaceComponent
      
    },
    {
        
        path: "new", 
        component:NewPlaceComponent
  
},
{
        
        path: "new/:id", 
        component:NewPlaceComponent
  
}
]


@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
      export class PlaceRoutingModule { }