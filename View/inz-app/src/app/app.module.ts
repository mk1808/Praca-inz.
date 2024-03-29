
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { AlertModule, AccordionModule, ButtonsModule, CarouselModule,
   CollapseModule, BsDatepickerModule, BsDropdownModule, 
   ModalModule, OffcanvasModule, PaginationModule, ProgressbarModule, 
   RatingModule, SortableModule, TabsModule, TimepickerModule,
    TooltipModule, TypeaheadModule } from 'ngx-foundation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { TestComponent } from './test/test.component';
import { StarRatingModule } from 'angular-star-rating';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {AutocompleteLibModule, AutocompleteComponent} from 'angular-ng-autocomplete';
import { NotifierModule } from 'angular-notifier';
import { MatBadgeModule } from '@angular/material';

import { AngularOpenlayersModule } from "ngx-openlayers";
import { ImageUploadModule } from "angular2-image-upload";
import { NgxSpinnerModule } from "ngx-spinner";
import { StarsComponent } from './shared/stars/stars.component';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { SharedModule } from './shared/shared/shared.module';

/*
@Injectable({
  providedIn: 'root'
})
*/
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    //RouterModule,
 //   BrowserModule,
   BrowserAnimationsModule,
 //SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxGalleryModule,
    StarRatingModule.forRoot(),
    AppRoutingModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),        // Foundation Callouts
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),     // Foundation Orbit
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),   // Foundation Dropdown Menus and Dropdown Panes
    ModalModule.forRoot(),        // Foundation Reveal
    OffcanvasModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    MatButtonModule,
    DragDropModule,
    MatTooltipModule,
    AutocompleteLibModule,
    MatBadgeModule,
   MatCheckboxModule,
   AngularOpenlayersModule,
   ImageUploadModule.forRoot(),
   NgxSpinnerModule,
   NgxParallaxScrollModule,
    NotifierModule.withConfig(
     { position: {
 
        vertical: {
          position: 'top',
          distance: 60
        },
       
        horizontal: {
          position: 'middle',
          distance: 12
          //,gap: 10
        }
       
      }
    }
    )
    
    
  ],
  
  providers: [ CookieService ],
  bootstrap: [AppComponent],
  exports:[
    
  ]
})
export class AppModule { }
