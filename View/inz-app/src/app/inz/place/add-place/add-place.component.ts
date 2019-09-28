import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TripService } from 'src/app/shared/services/trip.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User, Trip } from 'src/app/shared/models/classes';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})
export class AddPlaceComponent implements OnInit {
user:User=new User;
myTrips:Trip[]=[];
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


}
