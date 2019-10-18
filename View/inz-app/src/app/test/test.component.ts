import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Feature } from 'openlayers';
import { MatTooltip } from '@angular/material';
@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
     ol: any;
     map:any;
     @ViewChild('tooltip') tooltip:MatTooltip;
    keyword = 'name';
    visible:boolean=false;
  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
  ];
 
  public zoom = 15;
  public opacity = 1.0;
  public width = 5;
  
 
  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
    
    
    
   
    todo = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ];

    done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];

    next = [
        'Get up2',
        'Brush teeth2',
        'Take a shower2',
        'Check e-mail2',
        'Walk dog2'
    ];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    dropn(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }



    timePeriods = [
        'Bronze age',
        'Iron age',
        'Middle ages',
        'Early modern period',
        'Long nineteenth century'
    ];

    drop2(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);


        {
            if (event.previousContainer === event.container) {
                moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            } else {
                transferArrayItem(event.previousContainer.data,
                    event.container.data,
                    event.previousIndex,
                    event.currentIndex);
            }
        }
    }
    constructor() { }

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {


        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([ 22.0025522,50.0333997 ])),
            name: 'Null Island',
            population: 4000,
            rainfall: 500
          });
          
          var iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                size:[100,120],
            /*  anchor: [0, 0],
              anchorXUnits: 'pixels',
              anchorYUnits: 'pixels',*/
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
          
var element:any = document.getElementById('popup');
          
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
              }),vectorLayer
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([21, 52]),
              zoom: 8
            })
          });   
          this.map.addOverlay(popup);
          var layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [
                    new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([4.35247, 50.84673]))
                    })
                ]
            })
        });
       
        this.map.addLayer(layer);
/*
        var source = new ol.source.Vector({});
var layer2 = new ol.layer.Vector({ source: source});
    this.map.addLayer(layer2);

    var marker = new ol.Feature({
        geometry: new ol.geom.Point([0,0]) // dont worry about coordinate type 0,0 will be in west coast of africa
    }); 

    source.addFeature(marker);*/

      /*   this.map.on('click', function (args) {
            console.log(args.coordinate);
            var lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
            console.log(lonlat);
            
            var lon = lonlat[0];
            var lat = lonlat[1];
            this.tooltip.toggle();
           // alert(`lat: ${lat} long: ${lon}`);
          });
        */
         //////////////
         this.map.on('click', (evt) =>{
            var feature =this.map.forEachFeatureAtPixel(evt.pixel,
              function(feature) {
                return feature;
              });
            if (feature) {
              var coordinates = feature.getGeometry().getCoordinates();
              console.log(coordinates)
              popup.setPosition(coordinates);
                this.visible=!this.visible;
              this.tooltip.toggle();
           /*   popup.popover({
                placement: 'top',
                html: true,
                content: feature.get('name')
              });*/
           // element.popover('show');
            } else {
                this.tooltip.hide();
             // element.popover('destroy');
            }
          });
       
       
       
         
        











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

    increaseZoom() {
        this.zoom  = Math.min(this.zoom + 1, 18);
        console.log('zoom: ', this.zoom);
      }
    
      decreaseZoom() {
        this.zoom  = Math.max(this.zoom - 1, 1);
        console.log('zoom: ', this.zoom);
      }
    
      increaseOpacity() {
        this.opacity  = Math.min(this.opacity + 0.1, 1);
        console.log('opacity: ', this.opacity);
      }
    
      decreaseOpacity() {
        this.opacity  = Math.max(this.opacity - 0.1, 0);
        console.log('opacity: ', this.opacity);
      }

}
