import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place, PositionInTrip, User } from 'src/app/shared/models/classes';
import { MatDialog, MatTooltip } from '@angular/material';
import { AddPlaceComponent } from '../add-place/add-place.component';
import { ComponentsService } from 'src/app/shared/services/components.service';
import { RateDialogComponent } from './rate-dialog/rate-dialog.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  id: number;
  place: Place;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  /* latitude = 50.026783;
   longitude = 21.984447; 
   mapType = 'roadmap';*/
  logged: boolean = false;
  position: PositionInTrip = new PositionInTrip();
  hours: [][];
  singleDay = { start: null, end: null };
  allDays: any[] = [{ start: null, end: null }, { start: null, end: null }, { start: null, end: null }, { start: null, end: null }
    , { start: null, end: null }, { start: null, end: null }, { start: null, end: null }];
  allDaysSorted: any[] = [{ start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] },
  { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }]
  allDaysString: string[] = [null, null, null, null, null, null, null];
  daysGroups: any[] = [{ hours: null, start: null, end: null }, { hours: null, start: null, end: null }, { hours: null, start: null, end: null },
  { hours: null, start: null, end: null }, { hours: null, start: null, end: null }, { hours: null, start: null, end: null },
  { hours: null, start: null, end: null }]
  daysOfWeek: string[] = ["Pon", "Wt", "Śr", "Czw", "Pt", "So", "Ndz"]
  allDaysSortedFinal: any[] = [{ start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] },
  { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }];


  ///map
  ol: any;
  map: any;
  visible: boolean = false;
  longitude;
  latitude;
  initialized = false;
  photo = "";
  user:User=new User;
  isAdmin=false;
  @ViewChild('tooltip') tooltip: MatTooltip;
  constructor(private router: Router, private route: ActivatedRoute, private placeService: PlaceService,
    private componentsService: ComponentsService, private cookie:CookieService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.id = x['id'];
      console.log(this.id)
    })

    if (this.cookie.get('user') == "") {
    } else {
      this.logged=true;
      this.user = JSON.parse(this.cookie.get('user'));
      if(this.user.role.id!=1){
        this.isAdmin=true;
      }
    }


    this.placeService.getPlace(this.id).subscribe(x => {
      this.place = x;
      console.log(this.place);
      this.latitude = this.place.latitude;
      this.longitude = this.place.longitude;

      console.log(this.longitude);
      console.log(this.latitude);

      this.photo = this.componentsService.getIconForPlace(this.place.category);
      this.allDaysSortedFinal = this.componentsService.getHoursForDays(this.place.hours);
      console.log(this.allDaysSortedFinal);


      /////////map

      var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([this.longitude, this.latitude])),

        //  22.0025522, 50.0333997

        //this.longitude, this.latitude

        //   22.0025522,50.0333997 
        name: 'Null Island'
      });

      var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
          size: [100, 120],
          anchor: [14, 38],
          anchorXUnits: 'pixels',
          anchorYUnits: 'pixels',
          src: 'assets/placeholder2.png',
        })
      });

      iconFeature.setStyle(iconStyle);

      var vectorSource = new ol.source.Vector({
        features: [iconFeature]
      });

      var vectorLayer = new ol.layer.Vector({
        source: vectorSource
      });

      var element: any = document.getElementById('popup');

      var popup = new ol.Overlay({
        element: element,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -50]
      });

      this.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }), vectorLayer
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([this.longitude, this.latitude]),
          zoom: 11
        })
      });
      console.log(Math.round(this.latitude));
      this.map.addOverlay(popup);

      this.map.on('click', (evt) => {
        var feature = this.map.forEachFeatureAtPixel(evt.pixel,
          function (feature) {
            return feature;
          });
        if (feature) {
          var coordinates = feature.getGeometry().getCoordinates();
          console.log(coordinates)
          popup.setPosition(coordinates);
          this.visible = !this.visible;
          this.tooltip.toggle();
          this.tooltip.message = this.place.name;
        } else {
          this.tooltip.hide();
        }
      });





      this.galleryImages = [
        {
          small: this.place.image[0].image,
          medium: this.place.image[0].image,
          big: this.place.image[0].image
        },
        {
          small: this.place.image[1].image,
          medium: this.place.image[1].image,
          big: this.place.image[1].image
        },
        {
          small: this.place.image[2].image,
          medium: this.place.image[2].image,
          big: this.place.image[2].image
        },
        {
          small: this.place.image[3].image,
          medium: this.place.image[3].image,
          big: this.place.image[3].image
        }
      ]

      this.initialized = true;
    })

    //   this.initialized=true;



    this.galleryOptions = [
      {
        width: '800px',
        height: '420px',
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
        preview: true
      }
    ];

    let image1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Louvre_Palace_Courtyard_and_Pyramids.jpg/800px-Louvre_Palace_Courtyard_and_Pyramids.jpg';
    let image2 = 'https://media.fshoq.com/images/283/louvre-in-paris-during-the-night-283-medium.jpg';
    let image3 = 'https://live.staticflickr.com/3836/32985920833_1d600c6f24_b.jpg';
    let image4 = 'data:image/png;base64,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'

    image1 = image3;
    image2 = image4;
    /*
  this.galleryImages = [
        {
          small: this.place.image[0],
          medium: this.place.image[0],
          big: this.place.image[0]
        },
        {
          small: this.place.image[1],
          medium: this.place.image[1],
          big: this.place.image[1]
        },
        {
          small: image2,
          medium: image2,
          big: image2
        },
        {
          small: image2,
          medium: image2,
          big: image2
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
  
  */



  }

  onAdd() {

    const dialogRef = this.dialog.open(AddPlaceComponent, {
      width: '600px',
      data: this.place
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  onRatePlace(){
    const dialogRef = this.dialog.open(RateDialogComponent, {
      width: '600px',
      data: {trip:null, place:this.place, user:this.user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();

    });
  }

  onEdit(){

  }

  onConfirm(){
    
  }

}
