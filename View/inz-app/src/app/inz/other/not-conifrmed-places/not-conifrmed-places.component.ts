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
  myPlaces: Place[]=[];
  myFavTrips:Trip[]=[];
  placesFromTrip:Place[]=[];
  user: User;
  res:any;
  constructor(private router: Router, private route: ActivatedRoute, private cookie: CookieService,
    private tripService: TripService, private placeService:PlaceService, 
    private componentService:ComponentsService) {}
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
        let i=0;
        this.myPlaces.forEach(x=>{
          this.myPlaces[i].category=this.componentService.changeCategoriesToDisplay(this.myPlaces[i].category);
          i++;
        })
        console.log(this.myPlaces);

      })
      
      this.tripService.getWishListsForUser(this.user.id).subscribe(x=>{
       console.log(x);

        x.forEach(element => {
         this.myFavTrips.push(element.trip); 
     
 
      })
    }

      )
  }

}
}
