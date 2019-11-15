import { Component, OnInit, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TripService } from 'src/app/shared/services/trip.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User, Trip, Place, PositionInTrip, OpeningHours } from 'src/app/shared/models/classes';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})
export class AddPlaceComponent implements OnInit {
  user: User = new User;
  myTrips: Trip[] = [];
  initialized: boolean = true;
  mouseOver: boolean = false;
  chosenTrip: Trip = new Trip();
  place: Place = new Place();
  positionInTrip: PositionInTrip = new PositionInTrip();
  before = true;
  alreadyInTrip=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private route: ActivatedRoute, private cookie: CookieService,
    private tripService: TripService,  public dialogRef: MatDialogRef<AddPlaceComponent>) { }

  ngOnInit() {
console.log(this.data)
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

  onHover(i) {
    this.mouseOver = true;
  }

  onAdd(i) {
    this.tripService.isPlaceInTrip(this.data.id, this.myTrips[i].id).subscribe(y=>{
      if(y==false){
        this.alreadyInTrip=false;
        this.tripService.getTrip(this.myTrips[i].id).subscribe(x => {
          this.chosenTrip = x; console.log(this.chosenTrip);
          console.log(this.data);
          this.positionInTrip.place = this.data;
          this.positionInTrip.trip = this.chosenTrip;
    
          this.tripService.addPlaceToTrip(this.positionInTrip).subscribe(x => {
            console.log(x);
            this.before = false;
          }
          )
        })
      }
      else{
        this.before=false;
        this.alreadyInTrip=true;
      }
    })
    
  }

  
  checkTrip(){
    this.dialogRef.close();
    this.router.navigate(['/trip/details/'+this.chosenTrip.id]);
  }

  cancel(){
    this.dialogRef.close();
  }

  back(){
    this.before=true;
    this.alreadyInTrip=false;
  }

 
}
