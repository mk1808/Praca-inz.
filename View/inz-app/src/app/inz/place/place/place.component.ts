import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  latitude = 50.026783;
  longitude = 21.984447; 
  mapType = 'roadmap';
  ngOnInit(): void {

      this.galleryOptions = [
          {
              width: '600px',
              height: '400px',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide
          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
          },
          // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];

      this.galleryImages = [
          {
              small: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
              medium: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
              big: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
          },
          {
              small: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
              medium: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
              big: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
          },
          {
              small: 'https://images.pexels.com/photos/53350/seoul-skyscraper-building-architecture-53350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              medium: 'https://images.pexels.com/photos/53350/seoul-skyscraper-building-architecture-53350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              big: 'https://images.pexels.com/photos/53350/seoul-skyscraper-building-architecture-53350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          },
          {
            small: 'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
            medium: 'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
            big: 'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
        } 

      ];
  }
}
