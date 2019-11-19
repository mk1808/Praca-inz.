import { Component, OnInit } from '@angular/core';
import { Trip, Place, User } from 'src/app/shared/models/classes';
import { Router, ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/shared/services/trip.service';
import { PlaceService } from 'src/app/shared/services/place.service';
import { ComponentsService } from 'src/app/shared/services/components.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-not-conifrmed-places',
  templateUrl: './not-conifrmed-places.component.html',
  styleUrls: ['./not-conifrmed-places.component.scss']
})
export class NotConifrmedPlacesComponent implements OnInit {
  hover = false;
  myTrips: Trip[]=[];
  uncheckedPlaces: Place[]=[];
  myFavTrips:Trip[]=[];
  placesFromTrip:Place[]=[];
  user: User;
  res:any;
  initialized=false;
  constructor(private router: Router, private route: ActivatedRoute, private cookie: CookieService,
    private tripService: TripService, private placeService:PlaceService, 
    private componentService:ComponentsService) {}
  ngOnInit() {
    if (this.cookie.get('user') == "") {
      this.router.navigate(['/']);

    } else {
      this.user = JSON.parse(this.cookie.get('user'));
      this.placeService.getUncheckedPlaces().subscribe(x => {
        this.uncheckedPlaces = x;
        let i=0;
        this.uncheckedPlaces.forEach(x=>{
          this.uncheckedPlaces[i].category=this.componentService.changeCategoriesToDisplay(this.uncheckedPlaces[i].category);
          i++;
        })
        this.initialized=true;


      })


     
      
   
  }

}
}
