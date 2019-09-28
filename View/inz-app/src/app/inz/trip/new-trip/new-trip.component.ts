import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place } from 'src/app/shared/models/classes';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddPlaceToTripDialogComponent } from '../add-place-to-trip-dialog/add-place-to-trip-dialog.component';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent implements OnInit {
  form: FormGroup;
  fillingForm: boolean = true;
  choosePlaces: boolean = false;
  places: Place[];

  constructor(private fb: FormBuilder, private placeService: PlaceService,
    private router: Router, private route: ActivatedRoute, public dialog: MatDialog) {

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
  onCreate() {
   
    if (this.form.controls.region.value != "" && this.form.controls.region.value != null) {
      this.fillingForm = false; 
      this.placeService.getPlacesByRegCat(this.form.controls.region.value, "").subscribe(x => {
        this.places = x;
        console.log(this.places);

      })
    }
  }
  onBack() {
    this.fillingForm = true;

  }

  more() {
    this.router.navigate(['/all-places']);
  }

  onAdd(place:Place){
    console.log(place);

   
        
        const dialogRef = this.dialog.open(AddPlaceToTripDialogComponent, {
          width: '600px',
          data: {place}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          
        });
      
    
    


  }

}
