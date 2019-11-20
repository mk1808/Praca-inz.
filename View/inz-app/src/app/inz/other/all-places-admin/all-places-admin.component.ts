import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/shared/models/classes';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'openlayers';
import { Router, ActivatedRoute } from '@angular/router';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { PlaceService } from 'src/app/shared/services/place.service';
import { ComponentsService } from 'src/app/shared/services/components.service';

@Component({
  selector: 'app-all-places-admin',
  templateUrl: './all-places-admin.component.html',
  styleUrls: ['./all-places-admin.component.scss']
})
export class AllPlacesAdminComponent implements OnInit {
  places: Place[];
  filteredPlaces: Place[];
  stateCtrl = new FormControl();
//  filteredStates: Observable<any[]>;
  filteredRegions: String[];
  initialized: boolean = false;
  form: FormGroup;
  categories: String[];
  first=true;
  name=true;
  placeName="";
  placeRef="";
  placeCat="";  
  
  constructor(private router: Router, private route: ActivatedRoute, private placeService: PlaceService,
    private dictionaryService: DictionaryService, private componentService:ComponentsService, private fb: FormBuilder) {
 
    this.form = this.fb.group({
      name: [null]});
    this.initialized = true;

    this.form.controls.name.valueChanges.subscribe(y => {
      console.log(y);
      this.placeService.getPlacesFiltered(y).subscribe(x => {
        this.filteredPlaces = x;
        console.log(this.filteredPlaces);

      })

    })
  }

  ngOnInit() {


    this.placeService.getPlaces().subscribe(x => {
      this.places = x;
      console.log(this.places);
      this.places.sort((a,b)=>(a.id>b.id?1:-1));
   
      if(this.first){
        let placesFirst:Place[]=[];
        placesFirst= [...this.places].reverse();
        console.log(placesFirst);
        this.places=[];
        for (let i=0; i<9; i++){
          this.places.push(placesFirst[i]);
        }
      console.log(this.places);
      this.places.forEach(element => {
        element.category=this.componentService.changeCategoriesToDisplay(element.category);
          
        });
      }
    })

  }

  
  onSearchName() {
    
    if (this.form.controls.name.value != "" && this.form.controls.name.value != null) {
      this.first=false;
      this.places = [...this.filteredPlaces];
      this.places.forEach(element => {
        element.category=this.componentService.changeCategoriesToDisplay(element.category);
          
        });
    }
  }

}
