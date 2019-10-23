import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place } from 'src/app/shared/models/classes';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';

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
  categories: String[];
  constructor( private fb: FormBuilder, private placeService: PlaceService, private dictionaryService: DictionaryService) { }

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
  }

}
