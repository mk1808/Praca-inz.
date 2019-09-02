
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { AlertModule, AccordionModule, ButtonsModule, CarouselModule, CollapseModule, BsDatepickerModule, BsDropdownModule, ModalModule, OffcanvasModule, PaginationModule, ProgressbarModule, RatingModule, SortableModule, TabsModule, TimepickerModule, TooltipModule, TypeaheadModule } from 'ngx-foundation';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import {SlideshowModule} from 'ng-simple-slideshow';
import { FlipModule } from 'ngx-flip';
import { ObjectSearchingResultsComponent } from './object-searching-results/object-searching-results.component';
import { DestinationSearchingResultsComponent } from './destination-searching-results/destination-searching-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { AllPlacesComponent } from './all-places/all-places.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [MainComponent, ObjectSearchingResultsComponent, DestinationSearchingResultsComponent, AllTripsComponent, AllPlacesComponent],
  imports: [
    CommonModule,
    FlipModule,
    NgxHmCarouselModule,
    MainRoutingModule,
    AlertModule,
    SlideshowModule,

    AccordionModule,
    // Foundation Callouts
    ButtonsModule,
    CarouselModule,     // Foundation Orbit
    CollapseModule,
    BsDatepickerModule,
    BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
    ModalModule,        // Foundation Reveal
    OffcanvasModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
    MatButtonModule,
    MatChipsModule,
    AutocompleteLibModule
  

    
  ]
})
export class MainModule { }
