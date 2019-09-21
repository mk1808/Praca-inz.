import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place } from 'src/app/shared/models/classes';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent implements OnInit {
form:FormGroup;
fillingForm:boolean = true;
choosePlaces:boolean = false;
places:Place[];

  constructor( private fb: FormBuilder,  private placeService: PlaceService) { 
   
    this.form = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      region: ['', Validators.required],
      duration: ['', Validators.required],
      description: [''],
    })
  }

  ngOnInit() {
    
  }
  onCreate(){
    this.fillingForm=false;
  
    this.placeService.getPlacesByRegCat(this.form.controls.region.value, "").subscribe(x => {
      this.places = x;
      console.log(this.places);

    })
  }

  onBack(){
    this.fillingForm=true;

  

  }

}