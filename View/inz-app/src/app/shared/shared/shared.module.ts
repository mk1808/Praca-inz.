import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from '../stars/stars.component';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [StarsComponent],
  imports: [
    CommonModule,
    //BrowserAnimationsModule,
    NgxParallaxScrollModule,
    //BrowserModule
  ],
  exports:[StarsComponent, 
    //BrowserAnimationsModule,
    // BrowserModule
    ]
})
export class SharedModule { }
