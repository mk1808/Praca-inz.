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
      mon:[],
      tue:[],
      wed:[],
      thu:[],
      fri:[],
      sat:[],
      sun:[]
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
