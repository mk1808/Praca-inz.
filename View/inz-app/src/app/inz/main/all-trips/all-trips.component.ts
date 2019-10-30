import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Trip } from 'src/app/shared/models/classes';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/shared/services/trip.service';

import { map, startWith } from 'rxjs/operators';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { ComponentsService } from 'src/app/shared/services/components.service';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.scss']
})
export class AllTripsComponent implements OnInit {

  form: FormGroup;
  trips: Trip[];
  initialized = false;
  filteredTags: String[];
  chosenTags:string[]=[];
  filteredRegions: String[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  first=true;

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(private router: Router, private route: ActivatedRoute, private tripService: TripService,
    private dictionaryService: DictionaryService, private componentService:ComponentsService, private fb: FormBuilder) {

    this.form = this.fb.group({
      durationFrom: [""],
      durationTo: [""],
      tags: [""],
      region: [""]
    });

    this.initialized = true;

    this.form.controls.tags.valueChanges.subscribe(y => {
      console.log(y);
      this.dictionaryService.getTags().subscribe(x => {
        this.filteredTags = x;
        console.log(this.filteredTags);

      })

    })


    this.form.controls.region.valueChanges.subscribe(z => {
      console.log(z);
      this.tripService.getRegionsFiltered(z).subscribe(a => {
        this.filteredRegions = a;
        console.log(this.filteredRegions);

      })

    })

  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
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
  ngOnInit() {
    this.tripService.getTrips().subscribe(x => {
      this.trips = x;
      this.trips.sort((a,b)=>(a.id>b.id?1:-1));

      if(this.first){
        let tripsFirst:Trip[]=[];
        tripsFirst= [...this.trips].reverse();
        console.log(tripsFirst);
        this.trips=[];
        for (let i=0; i<9; i++){
          if(tripsFirst[i]!=null) this.trips.push(tripsFirst[i]);
        }
    
      }
      console.log(this.trips);
    })
  }

  onSearch(){
    console.log(this.chosenTags);

    let from, to, tags:any[], region;
    tags=[...this.chosenTags];
    from = this.form.controls.durationFrom.value;
    to = this.form.controls.durationTo.value;
    tags = this.componentService.changeTagsToSend(tags);
    region = this.form.controls.region.value;
    if(from!=null||to!=null||tags!=[]||region!=""){
      this.first=false;
    this.tripService.getTripsFiltered(from, to, region, tags).subscribe(x=>{
      this.trips=x;
      console.log(x);
 
    })}
    
  }



}
