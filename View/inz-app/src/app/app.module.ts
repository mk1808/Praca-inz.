
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
    BrowserModule,
    BrowserAnimationsModule,
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
    AutocompleteLibModule
    
    
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
