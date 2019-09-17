import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TripService } from 'src/app/shared/services/trip.service';
import { Trip, User } from 'src/app/shared/models/classes';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  hover = false;
  myTrips: Trip[];
  user: User;
  
  constructor(private router: Router, private route: ActivatedRoute, private cookie: CookieService,
    private tripService: TripService) { }

  ngOnInit() {
    if (this.cookie.get('user') == "") {
      this.router.navigate(['/']);

    } else {
      this.user = JSON.parse(this.cookie.get('user'));
      this.tripService.getTripsByUser(this.user.id).subscribe(x => {
        this.myTrips = x;
        console.log(this.myTrips);
      })
    }


  }

  onTrip(id){
    this.router.navigate(['/trip/details/'+id]);
  }

  onNewTrip(){
    this.router.navigate(['/trip/new']);
  }

}
