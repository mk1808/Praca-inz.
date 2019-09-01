import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/shared/models/classes';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/shared/services/place.service';

@Component({
  selector: 'app-all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.scss']
})
export class AllPlacesComponent implements OnInit {

  places:Place[];
 
  constructor(private router: Router, private route: ActivatedRoute, private placeService: PlaceService) { }

  ngOnInit() {

    this.placeService.getPlaces().subscribe(x=>{
      this.places=x;
      console.log(this.places);
    })

  }

}
