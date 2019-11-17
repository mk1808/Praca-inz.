import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TripService } from 'src/app/shared/services/trip.service';
import { Trip, User, Place } from 'src/app/shared/models/classes';
import { PlaceService } from 'src/app/shared/services/place.service';
import { ComponentsService } from 'src/app/shared/services/components.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.res = this.targetElement;
    this.componentService.heightObj=this.res;
    console.log(this.res.nativeElement.offsetHeight);this.checkHeight()
  }
  hover = false;
  myTrips: Trip[]=[];
  myPlaces: Place[]=[];
  myFavTrips:Trip[]=[];
  placesFromTrip:Place[]=[];
  user: User;
  res:any;
  @ViewChild('doc') targetElement: any; 
  constructor(private router: Router, private route: ActivatedRoute, private cookie: CookieService,
    private tripService: TripService, private placeService:PlaceService, private componentService:ComponentsService) { 
   
    }
  
  ngOnInit() {
   
    this.componentService.heightObj=this.res;
    if (this.cookie.get('user') == "") {
      this.router.navigate(['/']);

    } else {
      this.user = JSON.parse(this.cookie.get('user'));
      this.tripService.getTripsByUser(this.user.id).subscribe(x => {
        this.myTrips = x;
        console.log(this.myTrips);
        this.checkHeight() 
      })
/*
      this.tripService.getPlacesForTrip(this.id).subscribe(x=>{
        this.placesFromTrip=x;
        this.placesFromTrip.forEach(el=>{
   
        })
      });*/

      this.placeService.getPlacesByUser(this.user.id).subscribe(x=>{
        
        this.myPlaces=x;
        let i=0;
        this.myPlaces.forEach(x=>{
          this.myPlaces[i].category=this.componentService.changeCategoriesToDisplay(this.myPlaces[i].category);
          i++;
        })
        console.log(this.myPlaces);
        this.checkHeight()
      })
      
      this.tripService.getWishListsForUser(this.user.id).subscribe(x=>{
       console.log(x);

        x.forEach(element => {
         this.myFavTrips.push(element.trip); 
     
        });
        this.checkHeight()
      })
    }


  }
  
  checkHeight(){
    setTimeout(()=>{
      this.componentService.paralaxEventSource.next(this.res.nativeElement.offsetHeight);
    }, 2);
  }
  
  onTrip(id){
    console.log(this.res.nativeElement.offsetHeight)
    this.router.navigate(['/trip/details/'+id]);
  }

  onNewTrip(){
    this.router.navigate(['/trip/new']);
  }

  onPlace(id){
    this.router.navigate(['/place/details/'+id]);
  }

  onNewPlace(){
    this.router.navigate(['/place/new']);
  }

  onCreateSchedule(id:number){
    this.router.navigate(['/trip/new-schedule-dates', id]);
  }

onCheckSchedule(id){
  this.router.navigate(['/trip/schedule', id]);
}

  hasPositions(trip:Trip){
    trip.positionsInTrip.forEach(element => {
      
    });
  }
}
