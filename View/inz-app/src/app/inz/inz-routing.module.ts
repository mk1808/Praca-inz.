import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InzComponent } from './inz/inz.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
        {
                path: "", component: LayoutComponent, children: [
                        {
                                path: "",
                                loadChildren: "./main/main.module#MainModule"
                        }
                ]
        }
        
               

        ]

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class InzRoutingModule { }