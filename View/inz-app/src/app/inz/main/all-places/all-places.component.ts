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


  keyword = 'name';
  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
  ];
 
 
  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
  ngOnInit() {

    this.placeService.getPlaces().subscribe(x=>{
      this.places=x;
      console.log(this.places);
    })



    
  }

}
