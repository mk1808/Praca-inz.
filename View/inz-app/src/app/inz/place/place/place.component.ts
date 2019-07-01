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
              small: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Louvre_Palace_Courtyard_and_Pyramids.jpg/800px-Louvre_Palace_Courtyard_and_Pyramids.jpg',
              medium: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Louvre_Palace_Courtyard_and_Pyramids.jpg/800px-Louvre_Palace_Courtyard_and_Pyramids.jpg',
              big: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Louvre_Palace_Courtyard_and_Pyramids.jpg/800px-Louvre_Palace_Courtyard_and_Pyramids.jpg'
          },
          {
              small: 'https://media.fshoq.com/images/283/louvre-in-paris-during-the-night-283-medium.jpg',
              medium: 'https://media.fshoq.com/images/283/louvre-in-paris-during-the-night-283-medium.jpg',
              big: 'https://media.fshoq.com/images/283/louvre-in-paris-during-the-night-283-medium.jpg'
          },
          {
              small: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cour-carree-du-louvre-vers-louest.jpg/800px-Cour-carree-du-louvre-vers-louest.jpg',
              medium: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cour-carree-du-louvre-vers-louest.jpg/800px-Cour-carree-du-louvre-vers-louest.jpg',
              big: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cour-carree-du-louvre-vers-louest.jpg/800px-Cour-carree-du-louvre-vers-louest.jpg'
          },
          {
            small: 'https://c.pxhere.com/photos/89/bb/picture_painting_picture_gallery_painter_artist_lonardo_da_vinci_works_of_art_image_frame-673590.jpg!d',
            medium: 'https://c.pxhere.com/photos/89/bb/picture_painting_picture_gallery_painter_artist_lonardo_da_vinci_works_of_art_image_frame-673590.jpg!d',
            big: 'https://c.pxhere.com/photos/89/bb/picture_painting_picture_gallery_painter_artist_lonardo_da_vinci_works_of_art_image_frame-673590.jpg!d'
        },
        {
          small: 'https://storage.needpix.com/rsynced_images/paris-2373702_1280.jpg',
          medium: 'https://storage.needpix.com/rsynced_images/paris-2373702_1280.jpg',
          big: 'https://storage.needpix.com/rsynced_images/paris-2373702_1280.jpg'
      }  

      ];
  }
}
