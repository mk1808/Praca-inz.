import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/shared/models/classes';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/shared/services/place.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';

@Component({
  selector: 'app-all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.scss']
})


export class AllPlacesComponent implements OnInit {

  places: Place[];
  filteredPlaces: Place[];
  stateCtrl = new FormControl();
  filteredStates: Observable<any[]>;
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
    private dictionaryService: DictionaryService, private fb: FormBuilder) {

    this.form = this.fb.group({
      name: [null],
      category: [""],
      region: [""]
    });
    this.initialized = true;

    this.form.controls.name.valueChanges.subscribe(y => {
      console.log(y);
      this.placeService.getPlacesFiltered(y).subscribe(x => {
        this.filteredPlaces = x;
        console.log(this.filteredPlaces);

      })

    })


    this.form.controls.region.valueChanges.subscribe(z => {
      console.log(z);
      this.placeService.getRegionsFiltered(z).subscribe(a => {
        this.filteredRegions = a;
        console.log(this.filteredRegions);

      })

    })



  }


  placesTab: any[] = [
  ];




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
      }
  //    this.first=false;
    })

    this.dictionaryService.getCategories().subscribe(x => {
      this.categories = x;
      console.log(this.categories);
    })

  }

  onSearch() {
  

    let region = this.form.controls.region.value;
    let category = this.form.controls.category.value;
    console.log(category);
    console.log(region);
    if ((category != null) || (region != null)) {
      this.first=false;

      this.placeService.getPlacesByRegCat(region, category).subscribe(x => {
        this.places = x;
        console.log(this.places);

      })
    } else console.log("aaa");
  }

  onSearchName() {
    
    if (this.form.controls.name.value != "" && this.form.controls.name.value != null) {
      this.first=false;
      this.places = [...this.filteredPlaces];
    }
  }


}
