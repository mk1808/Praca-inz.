import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place, Trip } from 'src/app/shared/models/classes';
import { TripService } from 'src/app/shared/services/trip.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    
    
  ]
})
export class MainComponent implements OnInit {
   
  imageSources:string[]=['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/London_Eye_at_night_5.jpg/1280px-London_Eye_at_night_5.jpg', 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/06/ultra-wide-mistakes-lead-image.jpg',
'https://media.fshoq.com/images/150/arts-museum-louvre-in-paris-during-the-night-150-medium.jpg'];
  places:Place[];
  trips:Trip[];
  initializedPlaces = false;
  initializedTrips = false;
  initialized = false;
  form: FormGroup;
 
  constructor(private router: Router, private route: ActivatedRoute, private placeService: PlaceService,
    private tripService: TripService, private fb: FormBuilder) { 

      this.form = this.fb.group({
        search: [""]
      });
    }

  ngOnInit() {

    this.placeService.getPlaces().subscribe(x=>{
      this.places=x;
      this.initializedPlaces=true;
    })
    this.tripService.getTrips().subscribe(x=>{
      this.trips=x;
      this.initializedTrips=true;
    })
 this.initialized=true;

  }
  flipDiv = false;
  
  onClick() {
    this.flipDiv = !this.flipDiv;
  }

  onSearch(){
    this.router.navigate(['/search/dest']);
  }

  onPlace(id:string){
   console.log(id);
    this.router.navigate(['/place/details/'+id]);

  }


  morePlaces(){
    this.router.navigate(['/all-places']);
  }
  


  moreTrips(){
    this.router.navigate(['/all-trips']);
  }
  

  
}
