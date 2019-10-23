import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place, Trip } from 'src/app/shared/models/classes';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { TripService } from 'src/app/shared/services/trip.service';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destination-searching-results',
  templateUrl: './destination-searching-results.component.html',
  styleUrls: ['./destination-searching-results.component.scss']
})
export class DestinationSearchingResultsComponent implements OnInit {
  form: FormGroup;
  formTrip: FormGroup;
  initialized=false;
  region;
  filteredPlaces: Place[];
  filteredRegions: String[];
  filteredRegionsTrip: String[];
  filteredTags: String[];
  chosenTags:String[]=[];
  categories: String[];
  places: Place[];
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
      this.region = x['region'];
      console.log(this.region)
      if(this.first){
        this.placeService.getPlacesByRegCat(this.region, "").subscribe(a => {
          this.places = a;
          console.log(this.places);
  
        })

        this.tripService.getTripsFiltered("", "", this.region, []).subscribe(x=>{
          this.trips=x;
          console.log(x);
     
        })

        
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
      this.first=false;
      this.placeFirst=false;
    

      this.placeService.getPlacesByRegCat(region, category).subscribe(x => {
        this.places = x;
        console.log(this.places);

      })
    } else console.log("aaa");
  }

  onSearchName() {
    
    if (this.form.controls.name.value != "" && this.form.controls.name.value != null) {
      this.first=false;
      this.placeFirst=false;
      this.places = [...this.filteredPlaces];
    }
  }

  onSearchTrip(){
    console.log(this.chosenTags);
    let from, to, tags:any[], region;
    from = this.formTrip.controls.durationFrom.value;
    to = this.formTrip.controls.durationTo.value;
    tags = this.chosenTags;
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


