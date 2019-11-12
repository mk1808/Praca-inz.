import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ComponentsService } from 'src/app/shared/services/components.service';
import { TripService } from 'src/app/shared/services/trip.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Trip, Place, User, WishList } from 'src/app/shared/models/classes';
import { MatTooltip, MatDialog } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { RateDialogComponent } from '../../place/place/rate-dialog/rate-dialog.component';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit{
hover=false;

 ///map
 ol: any;
 map:any;
 @ViewChild('tooltip') tooltip:MatTooltip;
 visible:boolean=false;
 

tableContent:any[] = [
  {id: 1, name: "Muzeum Narodowe", location:"Warszawa", photo:"https://rosenthalblog.files.wordpress.com/2019/02/muzeum-narodowe.jpg"},
  {id: 2, name: "Zamek Królewski", location:"Warszawa", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Warszawa-Zamek_Kr%C3%B3lewski.jpg/1024px-Warszawa-Zamek_Kr%C3%B3lewski.jpg"},
  {id: 3, name: "Łazienki", location:"Warszawa", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Palac_Lazienki%2CWarszawa%2CPolska%2CUE._-_panoramio_%2841%29.jpg/800px-Palac_Lazienki%2CWarszawa%2CPolska%2CUE._-_panoramio_%2841%29.jpg"},
  {id: 4, name: "Muzeum Fryderyka Chopina", location:"Warszawa", photo:"https://ocs-pl.oktawave.com/v1/AUTH_f9dd5582-c0b6-4b27-a573-ecf06cf3ef09/tropter-www/uploads/images/72/20/c3d07d4d4b89d695216730eb8d6fadcc4deb/muzeum_fryderykachopina_000_medium.jpeg?t=20181211080851"},
  {id: 5, name: "Pałac Kultury i Nauki", location:"Warszawa", photo:"https://images.pexels.com/photos/77382/palac-kultury-palace-culture-pkin-kinoteka-77382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}, 
];
  constructor(private componentsService:ComponentsService, private cookie:CookieService, 
    private router: Router, private route: ActivatedRoute,
    private tripService: TripService, public dialog: MatDialog) { }
 /* latitude = 50.026783;
  longitude = 21.984447; 
  mapType = 'roadmap';*/
  id:number;
  trip:Trip;
  places:Place[]=[];
  user:User;
  resp:any[]=[];
  logged=false;
  inFavourities=false;
  wishlist:WishList=new WishList;
  currentWishlist:WishList=new WishList;
  initialized=false;
  photoTab:any[]=[];
  ngOnInit() {
    this.hover=false;
    this.route.params.subscribe(x => {
      this.id = x['id'];
  console.log(this.id)})

    if (this.cookie.get('user') == "") {
    } else {
      this.logged=true;
      this.user = JSON.parse(this.cookie.get('user'));
    }
if(this.logged){
  this.tripService.getWishListStatusForUserAndTrip(this.user.id, this.id).subscribe(x=>{
    this.resp=x;
    console.log(this.resp);
    if(this.resp.length>0){
      this.inFavourities=true;
      this.currentWishlist=this.resp[0];
      
    }
      })
}
  


  this.tripService.getTrip(this.id).subscribe(x=>{
      this.trip=x;
      console.log(this.trip);
  });
  this.tripService.getPlacesForTrip(this.id).subscribe(x=>{
    this.places=x;
    console.log(this.places);
    this.places.forEach(z=>{
      this.photoTab.push(z.image[0].image);
    })

    var iconStyle = new ol.style.Style({
      image: new ol.style.Icon({
        size:[100,120],
        anchor: [14, 38],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        src: 'assets/placeholder2.png',
      })
    });
    let tabPlace=[];
      /////////map
  this.places.forEach(x=>{
    let iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([ x.longitude,x.latitude ])),
        place: x
      });
      iconFeature.setStyle(iconStyle);
      tabPlace.push(iconFeature);
  })
      
      
    
     
      
      var vectorSource = new ol.source.Vector({
        features: tabPlace
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
          center: ol.proj.fromLonLat([21, 51.5]),
          zoom: 8
        })
      });   
      this.map.addOverlay(popup);
      console.log(this.map);  
      this.initialized=true;
    this.map.render();
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
         console.log(feature);
         this.tooltip.message=feature.get("place").name;
          this.tooltip.toggle();
        } else {
            this.tooltip.hide();
        }
      });
   
  })


  
   

  }

onHover(i){
  this.hover=true;
  let item=this.photoTab[i];
  this.componentsService.setTableItem(item);
}

onFav(){
  this.inFavourities=!this.inFavourities;
  this.wishlist.trip=this.trip;
  this.wishlist.user=this.user;
  if(this.inFavourities){
    this.tripService.addTripToWishList(this.wishlist).subscribe(x=>{
      console.log(x);
      this.currentWishlist=x;
    })
  }else{
    this.tripService.deleteTripFromWishList(this.currentWishlist.id).subscribe(y=>{
      console.log(y);
    })
  }
  console.log(this.inFavourities);
}


onRatePlace(){
  const dialogRef = this.dialog.open(RateDialogComponent, {
    width: '600px',
    data: this.trip
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}
}
