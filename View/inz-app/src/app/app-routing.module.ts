import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InzModule } from './inz/inz.module';

const routes: Routes = [
  {
    path: "",
    loadChildren: "./inz/inz.module#InzModule"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


//
