import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place, PositionInTrip } from 'src/app/shared/models/classes';
import { MatDialog, MatTooltip } from '@angular/material';
import { AddPlaceComponent } from '../add-place/add-place.component';
import { ComponentsService } from 'src/app/shared/services/components.service';

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
  logged: boolean = true;
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
  initialized = true;
  photo="";
  @ViewChild('tooltip') tooltip: MatTooltip;
  constructor(private router: Router, private route: ActivatedRoute, private placeService: PlaceService,
    private componentsService:ComponentsService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.id = x['id'];
      console.log(this.id)
    })

    this.placeService.getPlace(this.id).subscribe(x => {
      this.place = x;
      console.log(this.place);
      this.latitude = this.place.latitude;
      this.longitude = this.place.longitude;

      console.log(this.longitude);
      console.log(this.latitude);

      this.photo=this.componentsService.getIconForPlace(this.place.category);
     this.allDaysSortedFinal= this.componentsService.getHoursForDays(this.place.hours);
     console.log(this.allDaysSortedFinal);

/*

      if (this.place.hours.mon) {
      this.allDaysString[0] = (this.place.hours.monOpen + ' - ' + this.place.hours.monClose);
        this.allDays[0].start = this.place.hours.monOpen;
        this.allDays[0].end = this.place.hours.monClose;
      }

      if (this.place.hours.tue) {
      this.allDaysString[1] = (this.place.hours.tueOpen + ' - ' + this.place.hours.tueClose);
        this.allDays[1].start = this.place.hours.tueOpen;
        this.allDays[1].end = this.place.hours.tueClose;
      }

      if (this.place.hours.wed) {
      this.allDaysString[2] = (this.place.hours.wedOpen + ' - ' + this.place.hours.wedClose);
        this.allDays[2].start = this.place.hours.wedOpen;
        this.allDays[2].end = this.place.hours.wedClose;
      }

      if (this.place.hours.thu) {
      this.allDaysString[3] = (this.place.hours.thuOpen + ' - ' + this.place.hours.thuClose);
        this.allDays[3].start = this.place.hours.thuOpen;
        this.allDays[3].end = this.place.hours.thuClose;
      }

      if (this.place.hours.fri) {
      this.allDaysString[4] = (this.place.hours.friOpen + ' - ' + this.place.hours.friClose);
        this.allDays[4].start = this.place.hours.friOpen;
        this.allDays[4].end = this.place.hours.friClose;
      }

      if (this.place.hours.sat) {
      this.allDaysString[5] = (this.place.hours.satOpen + ' - ' + this.place.hours.satClose);
        this.allDays[5].start = this.place.hours.satOpen;
        this.allDays[5].end = this.place.hours.satClose;
      }

      if (this.place.hours.sun) {
      this.allDaysString[6] = (this.place.hours.sunOpen + ' - ' + this.place.hours.sunClose);
        this.allDays[6].start = this.place.hours.sunOpen;
        this.allDays[6].end = this.place.hours.sunClose;
      }

      console.log(this.allDaysString);
     
      let i = 0;
      let start = this.allDaysString[0];
      let tab: [] = [];
      let j = -1;
      let repeated: boolean = false;
      let length;
      for (let i = 0; i < 7; i++) {
        if (this.allDaysString[i] != null) {
          this.allDaysSorted.forEach(x => {
            if (x.start == this.allDaysString[i]) {
              x.ids.push(this.daysOfWeek[i]);

              repeated = true;

            }
          })
          if (!repeated) {
            j++;
            this.allDaysSorted[j].start = this.allDaysString[i];
            this.allDaysSorted[j].ids.push(this.daysOfWeek[i]);
          }


        }

        let start = this.allDaysString[i];
      }
      console.log(this.allDaysSorted);

      let index = 0;
      let mult = false;
      let k = 0;
      this.allDaysSorted[0].ids = "Pn"
      for (k = 1; k < 7; k++) {
        if (this.allDaysString[k] == this.allDaysString[k - 1]) {
          mult = true;
        }
        else {
          if (mult) {
            this.allDaysSorted[index].ids += '-' + this.daysOfWeek[k - 1];
            this.allDaysSorted[index].start = this.allDaysString[k - 1] == null ? "nieczynne" : this.allDaysString[k - 1];
          } else {
            this.allDaysSorted[index].start = this.allDaysString[k - 1] == null ? "nieczynne" : this.allDaysString[k - 1];
          }
          index++;
          this.allDaysSorted[index].ids = this.daysOfWeek[k];
          mult = false;
        }
      }
      if (mult) {
        this.allDaysSorted[index].ids += '-' + this.daysOfWeek[k - 1];
        this.allDaysSorted[index].start = this.allDaysString[k - 1] == null ? "nieczynne" : this.allDaysString[k - 1];
      } else {
        this.allDaysSorted[index].start = this.allDaysString[k - 1] == null ? "nieczynne" : this.allDaysString[k - 1];
      }

      console.log(this.allDaysSorted);
      */

      /////////map

      var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([ this.longitude, this.latitude  ])),

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
          center: ol.proj.fromLonLat([this.longitude,this.latitude]),
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
        } else {
          this.tooltip.hide();
        }
      });



      /*    this.allDaysSorted.forEach(x=>{
            if(x.ids.length>1){
  
            x.ids.forEach(element => {
              if(element==x.ids){}
            });}
          })
         // console.log(this. );*/
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

  onAdd() {

    const dialogRef = this.dialog.open(AddPlaceComponent, {
      width: '600px',
      data: this.place
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
