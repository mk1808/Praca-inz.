
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, AccordionModule, ButtonsModule, CarouselModule,
   CollapseModule, BsDatepickerModule, BsDropdownModule, 
   ModalModule, OffcanvasModule, PaginationModule, ProgressbarModule, 
   RatingModule, SortableModule, TabsModule, TimepickerModule,
    TooltipModule, TypeaheadModule } from 'ngx-foundation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InzModule } from './inz/inz.module';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
