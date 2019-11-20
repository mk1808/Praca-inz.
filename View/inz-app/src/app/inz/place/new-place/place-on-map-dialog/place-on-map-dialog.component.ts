import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatTooltip } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';
import { ComponentsService } from 'src/app/shared/services/components.service';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';

@Component({
  selector: 'app-place-on-map-dialog',
  templateUrl: './place-on-map-dialog.component.html',
  styleUrls: ['./place-on-map-dialog.component.scss']
})
export class PlaceOnMapDialogComponent implements OnInit {
form:FormGroup;
initialized=false;
ol: any;
  map: any;
  visible: boolean = false;
  longitude=0;
  latitude=0;
  coordinates;
  iconFeature;
  iconStyle;
  vectorSource;
  vectorLayer;

  @ViewChild('tooltip') tooltip: MatTooltip;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb:FormBuilder, 
  private placeService:PlaceService, private componentService:ComponentsService, 
  private dictionaryService:DictionaryService,
   public dialogRef: MatDialogRef<PlaceOnMapDialogComponent>) { }

  ngOnInit() {
    console.log(this.data)
   this.dictionaryService.getPossibleCoordinates(this.data.place).subscribe((x)=>{
     console.log(x);
     this.coordinates=x;
     if(this.coordinates.length>0){
     this.form.controls.place.setValue(x[0])
   this.latitude=this.coordinates[0].lat;
   this.longitude=this.coordinates[0].lon;
    }

   })
   
    this.form = this.fb.group({
      place:[]
  
    })

    this.form.valueChanges.subscribe(e=>{
     
   this.latitude=e.place.lat;
   this.longitude=e.place.lon;
console.log(this)
//this.iconFeature.setGeometry(new ol.geom.Point(ol.proj.fromLonLat([this.longitude, this.latitude])));
//this.vectorLayer.getSource().changed();
      this.vectorSource.forEachFeature((feature)=>{
        
        feature.setGeometry(new ol.geom.Point(ol.proj.fromLonLat([this.longitude, this.latitude])));
       }
   );

   
   this.map.getView().setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    })
     /////////map

     this.iconFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([this.longitude, this.latitude])),
      name: 'Null Island'
    });

    this.iconStyle = new ol.style.Style({
      image: new ol.style.Icon({
        size: [100, 120],
        anchor: [14, 38],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        src: 'assets/placeholder2.png',
      })
    });

    this.iconFeature.setStyle(this.iconStyle);

    this.vectorSource = new ol.source.Vector({
      features: [this.iconFeature]
    });

    this.vectorLayer = new ol.layer.Vector({
      source: this.vectorSource
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
        }), this.vectorLayer
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
        this.tooltip.message = this.data.place;
      } else {
        this.tooltip.hide();
      }
    });




    this.initialized=true;
  }

  cancel(){
    this.dialogRef.close();
  }

  confirm(){
   console.log( this.form.controls.place.value);
    this.dialogRef.close(this.form.controls.place.value);
  }

}
