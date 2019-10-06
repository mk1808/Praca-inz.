import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Place, User, OpeningHours } from 'src/app/shared/models/classes';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/shared/services/place.service';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.scss']
})
export class NewPlaceComponent implements OnInit {
categories:any[]=[];
form: FormGroup;
newPlace: Place=new Place;
user:User = new User;
newPlaceId:number;
openingHours:OpeningHours = new OpeningHours();
week:boolean[]=[false,false,false,false,false,false,false];
constructor(private fb: FormBuilder, private placeService: PlaceService,
  private router: Router, private route: ActivatedRoute,
   private dictionaryService: DictionaryService, private cookie:CookieService) { }

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
      mon:[false],
      tue:[false],
      wed:[false],
      thu:[false],
      fri:[false],
      sat:[false],
      sun:[false],
      monOpen:[null],
      tueOpen:[null],
      wedOpen:[null],
      thuOpen:[null],
      friOpen:[null],
      satOpen:[null],
      sunOpen:[null],
      monClose:[null],
      tueClose:[null],
      wedClose:[null],
      thuClose:[null],
      friClose:[null],
      satClose:[null],
      sunClose:[null],
      
    })

    this.dictionaryService.getCategories().subscribe(x => {
      this.categories = x;
      console.log(this.categories);
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
    this.openingHours.mon=this.form.controls.mon.value;
    this.openingHours.tue=this.form.controls.tue.value;
    this.openingHours.wed=this.form.controls.wed.value;
    this.openingHours.thu=this.form.controls.thu.value;
    this.openingHours.fri=this.form.controls.fri.value;
    this.openingHours.sat=this.form.controls.sat.value;
    this.openingHours.sun=this.form.controls.sun.value;
    this.openingHours.monOpen=this.form.controls.monOpen.value;
    this.openingHours.monClose=this.form.controls.monClose.value;
    this.openingHours.tueOpen=this.form.controls.tueOpen.value;
    this.openingHours.tueClose=this.form.controls.tueClose.value;
    this.openingHours.wedOpen=this.form.controls.wedOpen.value;
    this.openingHours.wedClose=this.form.controls.wedClose.value;
    this.openingHours.thuOpen=this.form.controls.thuOpen.value;
    this.openingHours.thuClose=this.form.controls.thuClose.value;
    this.openingHours.friOpen=this.form.controls.friOpen.value;
    this.openingHours.friClose=this.form.controls.friClose.value;
    this.openingHours.satOpen=this.form.controls.satOpen.value;
    this.openingHours.satClose=this.form.controls.satClose.value;
    this.openingHours.sunOpen=this.form.controls.sunOpen.value;
    this.openingHours.sunClose=this.form.controls.sunClose.value;
    this.newPlace.hours=this.openingHours;
    

this.user = JSON.parse(this.cookie.get('user'));
this.newPlace.user=this.user;
this.newPlace.status="new";
console.log(this.newPlace);
    this.placeService.createPlace(this.newPlace).subscribe(x=>{
      console.log(x);
      this.newPlaceId=x.id;
      this.router.navigate(['/place/details/' + this.newPlaceId]);
    })

  }

}
