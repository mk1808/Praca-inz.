import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Place, User, OpeningHours, Image } from 'src/app/shared/models/classes';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/shared/services/place.service';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { CookieService } from 'ngx-cookie-service';
import { ComponentsService } from 'src/app/shared/services/components.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.scss']
})
export class NewPlaceComponent implements OnInit {
  ngAfterViewInit(): void {
    this.res = this.targetElement;
    this.componentService.heightObj=this.res;
    console.log(this.res.nativeElement.offsetHeight);this.checkHeight()
  }
categories:any[]=[];
countries:any[]=[];
form: FormGroup;
newPlace: Place=new Place;
user:User = new User;
newPlaceId:number;
openingHours:OpeningHours = new OpeningHours();
week:boolean[]=[false,false,false,false,false,false,false];
file:any;
image:any;
imgObj:Image = new Image();
res:any;
id;
editedPlace:Place;
editing:boolean=false;
@ViewChild('doc') targetElement: any; 
constructor(private fb: FormBuilder, private placeService: PlaceService,
  private componentService:ComponentsService,
  private router: Router, private route: ActivatedRoute,
   private dictionaryService: DictionaryService, private cookie:CookieService) { }

  ngOnInit() {
    //this.form = this.fb.group({});
    
    this.route.params.subscribe(x => {
      console.log(x);
      this.id = x['id'];
      if(this.id){
      this.editing=true;
      console.log(this.id);
      this.placeService.getPlace(this.id).subscribe(y=>{
        this.editedPlace=y;
        this.form = this.fb.group({
          name: [this.editedPlace.name, Validators.required],
          category: [this.componentService.changeCategoriesToDisplay(this.editedPlace.category), Validators.required],
          country: ['Polska', Validators.required],
          region: [this.editedPlace.region, Validators.required],
          city: [this.editedPlace.city, Validators.required],
          street: [this.editedPlace.street, Validators.required],
          number: [this.editedPlace.number, Validators.required],
          phone: [this.editedPlace.phoneNumber, Validators.required],
          website: [this.editedPlace.website, Validators.required],
          description: [this.editedPlace.description],
          mon:[false],
          tue:[false],
          wed:[false],
          thu:[false],
          fri:[false],
          sat:[false],
          sun:[false],
          monOpen:[this.editedPlace.hours.monOpen],
          tueOpen:[this.editedPlace.hours.tueOpen],
          wedOpen:[this.editedPlace.hours.wedOpen],
          thuOpen:[this.editedPlace.hours.thuOpen],
          friOpen:[this.editedPlace.hours.friOpen],
          satOpen:[this.editedPlace.hours.satOpen],
          sunOpen:[this.editedPlace.hours.sunOpen],
          monClose:[this.editedPlace.hours.monClose],
          tueClose:[this.editedPlace.hours.tueClose],
          wedClose:[this.editedPlace.hours.wedClose],
          thuClose:[this.editedPlace.hours.thuClose],
          friClose:[this.editedPlace.hours.friClose],
          satClose:[this.editedPlace.hours.satClose],
          sunClose:[this.editedPlace.hours.sunClose],
          latitude:[this.editedPlace.latitude],
          longitude:[this.editedPlace.longitude]
          
        })
        this.week=[this.editedPlace.hours.mon, this.editedPlace.hours.tue, 
          this.editedPlace.hours.wed,this.editedPlace.hours.thu,this.editedPlace.hours.fri,
          this.editedPlace.hours.sat, this.editedPlace.hours.sun]
        //this.form.controls.name.v
      })
      }
      else{this.form = this.fb.group({
        name: ['', Validators.required],
        category: ['', Validators.required],
        country: ['Polska', Validators.required],
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
        latitude:[''],
        longitude:['']
        
      })}
    })
    

    this.componentService.heightObj=this.res;
    this.newPlace.image=[];   
    
    

    this.dictionaryService.getCategories().subscribe(x => {
      this.categories = x;
      console.log(this.categories);
      this.checkHeight();
    })

    this.dictionaryService.getCountries().subscribe(y=>{
      this.countries = y;
      if(this.editedPlace)this.form.controls.country.setValue(this.editedPlace.country);
      this.checkHeight();
    })
  }

  checkHeight(){
    setTimeout(()=>{
      this.componentService.paralaxEventSource.next(this.res.nativeElement.offsetHeight);
    }, 2);
  }
  
  create(){
    let category=this.componentService.changeCategoriesToSend(this.form.controls.category.value);
    this.newPlace.name=this.form.controls.name.value;
    this.newPlace.category=category;
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
   
    this.imgObj.image=this.image;
    console.log(this.imgObj);
    this.newPlace.image.push(this.imgObj);
    this.newPlace.latitude=this.form.controls.latitude.value;
    this.newPlace.longitude=this.form.controls.longitude.value;
    

this.user = JSON.parse(this.cookie.get('user'));
this.newPlace.user=this.user;
this.newPlace.status="new";
this.newPlace.checked=false;
console.log(this.newPlace);
    this.placeService.createPlace(this.newPlace).subscribe(x=>{
      console.log(x);
      this.newPlaceId=x.id;
      this.router.navigate(['/place/details/' + this.newPlaceId]);
    })

  }

  onUploadFinished(event){
    let img=event.file;
    console.log(img);
    this.readImage(img);

  }

  readImage(inputValue: any){
    this.file = inputValue;
  //  this.form.controls.image.setValue("");
    let myReader: FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
     // this.imageControl=''; 
     console.log(this.image);
    }
    myReader.readAsDataURL(this.file);
  }

}
