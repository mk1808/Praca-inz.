import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Place } from 'src/app/shared/models/classes';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/shared/services/place.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.scss']
})
export class NewPlaceComponent implements OnInit {
categories:any[]=["muzeum", "galeria sztuki", "park", "pomnik"]
form: FormGroup;
newPlace: Place=new Place;
constructor(private fb: FormBuilder, private placeService: PlaceService,
  private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      country: ['', Validators.required],
      region: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      description: [''],
    })
  }

  create(){
    this.newPlace.name=this.form.controls.name.value;
    this.newPlace.category=this.form.controls.category.value;
    this.newPlace.country=this.form.controls.country.value;
    this.newPlace.region=this.form.controls.region.value;
    this.newPlace.city=this.form.controls.city.value;
    this.newPlace.street=this.form.controls.street.value;
    this.newPlace.number=this.form.controls.number.value;
    this.newPlace.phoneNumber=this.form.controls.phone.value;
    this.newPlace.website=this.form.controls.website.value;
    this.newPlace.description=this.form.controls.description.value;

    this.placeService.createPlace(this.newPlace).subscribe(x=>{
      console.log(x);
    })

  }

}
