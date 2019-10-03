import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TripService } from 'src/app/shared/services/trip.service';
import { Trip, User, Place } from 'src/app/shared/models/classes';
import { PlaceService } from 'src/app/shared/services/place.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  hover = false;
  myTrips: Trip[]=[];
  myPlaces: Place[]=[];
  user: User;
  
  constructor(private router: Router, private route: ActivatedRoute, private cookie: CookieService,
    private tripService: TripService, private placeService:PlaceService) { }

  ngOnInit() {
    if (this.cookie.get('user') == "") {
      this.router.navigate(['/']);

    } else {
      this.user = JSON.parse(this.cookie.get('user'));
      this.tripService.getTripsByUser(this.user.id).subscribe(x => {
        this.myTrips = x;
        console.log(this.myTrips);
      })
      this.placeService.getPlacesByUser(this.user.id).subscribe(x=>{
        this.myPlaces=x;
        console.log(this.myPlaces);
      })


    }


  }

  onTrip(id){
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
    this.router.navigate(['/trip/new-schedule', id]);
  }
}
