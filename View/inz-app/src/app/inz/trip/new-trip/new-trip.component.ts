import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place, Trip, PositionInTrip } from 'src/app/shared/models/classes';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddPlaceToTripDialogComponent } from '../add-place-to-trip-dialog/add-place-to-trip-dialog.component';
import { TripService } from 'src/app/shared/services/trip.service';
import { CookieService } from 'ngx-cookie-service';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { ComponentsService } from 'src/app/shared/services/components.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent implements OnInit {
  ngAfterViewInit(): void {
    this.res = this.targetElement;
    this.componentService.heightObj=this.res;
    console.log(this.res.nativeElement.offsetHeight);this.checkHeight()
  }
  form: FormGroup;
  fillingForm: boolean = true;
  choosePlaces: boolean = false;
  places: Place[];
  trip: Trip = new Trip();
  newTrip: Trip = new Trip();
  added: boolean = false;
  addButton: string = "Dodaj";
  addButtonIcon: string = "add_circle";
  position:PositionInTrip = new PositionInTrip();
  status:boolean[]=[];
  countries:any[]=[];
  filteredTags:any[]=[];
  res:any;
@ViewChild('doc') targetElement: any;

  constructor(private fb: FormBuilder, private placeService: PlaceService, private tripService: TripService,
    private dictionaryService:DictionaryService, private componentService:ComponentsService,
    private router: Router, private route: ActivatedRoute, public dialog: MatDialog, 
     private cookie:CookieService) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      country: ['Polska', Validators.required],
      region: ['', Validators.required],
      duration: ['', Validators.required],
      description: [''],
      tags: ['']
    })
  }

  ngOnInit() {
    this.componentService.heightObj=this.res;
    this.dictionaryService.getCountries().subscribe(y=>{
      this.countries = y;
      this.checkHeight();
    })

    this.dictionaryService.getTags().subscribe(x => {
      this.filteredTags = x;
      console.log(this.filteredTags);
      this.checkHeight();

    })

  }

  checkHeight(){
    setTimeout(()=>{
      this.componentService.paralaxEventSource.next(this.res.nativeElement.offsetHeight);
    }, 2);
  }
  onCreate() {
    let tags=this.form.controls.tags.value;
    let i=0;
    tags.forEach(el=>{
      let pos=el.indexOf(" ");
      if(pos!=-1){
        let words:string[]=[];
        words = el.split(" ");
        console.log(words)
        words[1]= words[1].charAt(0).toUpperCase() + words[1].slice(1);
        tags[i]=words[0]+words[1];
        console.log(tags[i]);

      }
      i++;
      console.log();

    })
//console.log(tags)
    if (this.form.controls.region.value != "" && this.form.controls.region.value != null) {
      this.trip.name = this.form.controls.name.value;
      this.trip.country = this.form.controls.country.value;
      this.trip.region = this.form.controls.region.value;
      this.trip.duration = this.form.controls.duration.value;
      this.trip.description = this.form.controls.description.value;
      this.trip.tags=tags;
      this.trip.user = JSON.parse(this.cookie.get('user'));
      this.tripService.createTrip(this.trip).subscribe(x => {
        console.log(x);
        this.newTrip=x;
      })
      this.fillingForm = false;
      this.placeService.getPlacesByRegCat(this.form.controls.region.value, "").subscribe(x => {
        this.places = x;

        this.places.forEach(x=>{
          this.status.push(true);
        })
        console.log(this.places);
        if (this.places.length<1)this.router.navigate(['/all-places']);
      })
    }
  }
  onBack() {
    this.fillingForm = true;

  }

  more() {
    this.router.navigate(['/all-places']);
  }

  onAdd(place: Place, i:number) {
    console.log(place);
    this.status[i]=false;
   

    
    if (!this.added) {
      this.position.place=place;
      this.position.trip=this.newTrip;
      this.tripService.addPlaceToTrip(this.position).subscribe(x=>{
        console.log(x);
      })
      const dialogRef = this.dialog.open(AddPlaceToTripDialogComponent, {
        width: '600px',
        data: { place }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    }
    this.added = true;




  }

}
