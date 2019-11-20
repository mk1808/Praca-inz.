import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Place, Trip } from 'src/app/shared/models/classes';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router, ActivatedRoute } from '@angular/router';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { PlaceService } from 'src/app/shared/services/place.service';
import { TripService } from 'src/app/shared/services/trip.service';
import { ComponentsService } from 'src/app/shared/services/components.service';

@Component({
  selector: 'app-object-searching-results',
  templateUrl: './object-searching-results.component.html',
  styleUrls: ['./object-searching-results.component.scss']
})
export class ObjectSearchingResultsComponent implements OnInit {
  form: FormGroup;
  formTrip: FormGroup;
  initialized=false;
  id;
  filteredPlaces: Place[];
  filteredRegions: String[];
  filteredRegionsTrip: String[];
  filteredTags: String[];
  chosenTags:String[]=[];
  categories: String[];
  places: Place[]=[];
  trips: Trip[];
  first=true;
  placeFirst=true;
  tripFirst=true;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('autoT') matAutocomplete: MatAutocomplete;
  constructor( private fb: FormBuilder, private placeService: PlaceService, 
    private tripService: TripService, private dictionaryService: DictionaryService,
    private componentService:ComponentsService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null],
      category: [""],
      region: [""]
    });
    
    this.formTrip = this.fb.group({
      durationFrom: [""],
      durationTo: [""],
      tags: [""],
      region: [""]
    });

    this.route.params.subscribe(x => {
      this.id = x['place'];
      console.log(this.id)
      if(this.first&&this.id!="undefined"){
        this.placeService.getPlace(this.id).subscribe(y=>{
          this.places.push(y);
          this.places[0].category=this.componentService.changeCategoriesToDisplay(this.places[0].category);
              
            });
        
       
        this.tripService.getTripsByPlace(this.id).subscribe(z=>{
          this.trips=z;
          console.log(this.trips)
        })
}else{
  this.places=[];
  this.trips=[];
}
    })
    
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

    
    this.dictionaryService.getCategories().subscribe(x => {
      this.categories = x;
      console.log(this.categories);
    })

    this.formTrip.controls.region.valueChanges.subscribe(z => {
      console.log(z);
      this.tripService.getRegionsFiltered(z).subscribe(a => {
        this.filteredRegionsTrip= a;
        console.log(this.filteredRegionsTrip);

      })
  })

  this.formTrip.controls.tags.valueChanges.subscribe(y => {
    console.log(y);
    this.dictionaryService.getTags().subscribe(x => {
      this.filteredTags = x;
      console.log(this.filteredTags);

    })
})


  }

  add(event: MatChipInputEvent): void {

    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.chosenTags.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.formTrip.controls.tags.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.chosenTags.indexOf(fruit);

    if (index >= 0) {
      this.chosenTags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.chosenTags.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.formTrip.controls.tags.setValue(null);

  }


  
  onSearch() {
  

    let region = this.form.controls.region.value;
    let category = this.form.controls.category.value;
    console.log(category);
    console.log(region);
    if ((category != null) || (region != null)) {
      category=this.componentService.changeCategoriesToSend(category);
     
      this.first=false;
      this.placeFirst=false;
    

      this.placeService.getPlacesByRegCat(region, category).subscribe(x => {
        this.places = x;
        this.places.forEach(element => {
          element.category=this.componentService.changeCategoriesToDisplay(element.category);
            
          });
        console.log(this.places);

      })
    } else console.log("aaa");
  }

  onSearchName() {
    
    if (this.form.controls.name.value != "" && this.form.controls.name.value != null) {
      this.first=false;
      this.placeFirst=false;
      this.places = [...this.filteredPlaces];
      this.places.forEach(element => {
        element.category=this.componentService.changeCategoriesToDisplay(element.category);
          
        });
    }
  }

  onSearchTrip(){
    console.log(this.chosenTags);
    let from, to, tags:any[], region;
    tags=[...this.chosenTags];
    from = this.formTrip.controls.durationFrom.value;
    to = this.formTrip.controls.durationTo.value;
    tags = this.componentService.changeTagsToSend(tags);
    region = this.formTrip.controls.region.value;
    if(from!=null||to!=null||tags!=[]||region!=""){
      this.first=false
      this.tripFirst=false;
    this.tripService.getTripsFiltered(from, to, region, tags).subscribe(x=>{
      this.trips=x;
      console.log(x);
 
    })}
    
  }


}


