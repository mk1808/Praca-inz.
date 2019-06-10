import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

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
              small: 'https://picsum.photos/50',
              medium: 'https://picsum.photos/100/200',
              big: 'https://picsum.photos/200/300'
          },
          {
              small: 'https://picsum.photos/50',
              medium: 'https://picsum.photos/100/200',
              big: 'https://picsum.photos/200/300'
          },
          {
              small: 'https://picsum.photos/50',
              medium: 'https://picsum.photos/100/200',
              big: 'https://picsum.photos/200/300'
          },
          {
            small: 'https://picsum.photos/50',
            medium: 'https://picsum.photos/100/200',
            big: 'https://picsum.photos/200/300'
        } 

      ];
  }
}
