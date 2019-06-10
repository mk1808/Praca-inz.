
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { AlertModule, AccordionModule, ButtonsModule, CarouselModule, CollapseModule, BsDatepickerModule, BsDropdownModule, ModalModule, OffcanvasModule, PaginationModule, ProgressbarModule, RatingModule, SortableModule, TabsModule, TimepickerModule, TooltipModule, TypeaheadModule } from 'ngx-foundation';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import {SlideshowModule} from 'ng-simple-slideshow';
  
import { FlipModule } from 'ngx-flip';
@NgModule({
  declarations: [MainComponent],
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

    
  ]
})
export class MainModule { }
