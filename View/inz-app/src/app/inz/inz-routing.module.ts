import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InzComponent } from './inz/inz.component';

const routes: Routes = [
    {
        
            path: "",
            loadChildren: "./main/main.module#MainModule"
      
    }]

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
      export class InzRoutingModule { }