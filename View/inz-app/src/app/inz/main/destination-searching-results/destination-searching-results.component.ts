import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place } from 'src/app/shared/models/classes';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { TripService } from 'src/app/shared/services/trip.service';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material';

@Component({
  selector: 'app-destination-searching-results',
  templateUrl: './destination-searching-results.component.html',
  styleUrls: ['./destination-searching-results.component.scss']
})
export class DestinationSearchingResultsComponent implements OnInit {
  form: FormGroup;
  formTrip: FormGroup;
  initialized=false;
  filteredPlaces: Place[];
  filteredRegions: String[];
  filteredRegionsTrip: String[];
  filteredTags: String[];
  chosenTags:String[]=[];
  categories: String[];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor( private fb: FormBuilder, private placeService: PlaceService, 
    private tripService: TripService, private dictionaryService: DictionaryService) { }

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

      this.form.controls.tags.setValue(null);
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
    this.form.controls.tags.setValue(null);

  }
}


