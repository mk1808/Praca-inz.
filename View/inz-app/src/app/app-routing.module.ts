import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InzModule } from './inz/inz.module';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: "./inz/inz.module#InzModule"
},
{
  path: "test",
  component:TestComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }


//
