import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Rating } from 'src/app/shared/models/classes';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.scss']
})
export class RateDialogComponent implements OnInit {
initialized=false;
rating:Rating= new Rating;
form: FormGroup;
oldRatingVal:number=5;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb:FormBuilder, 
  private placeService:PlaceService,  public dialogRef: MatDialogRef<RateDialogComponent>) { }

  ngOnInit() {
    console.log(this.data);
    this.form = this.fb.group({
      rating:[this.oldRatingVal.toString()]
    })
   
    if(this.data.place!=null){
      this.placeService.getRatingByPlaceAndUser(this.data.place.id, this.data.user.id).subscribe(x=>{
        this.oldRatingVal=x.value;
        this.form.controls.rating.setValue(x.value);
        console.log(x)
      })
    }
    else{
      this.placeService.getRatingByTripAndUser(this.data.trip.id, this.data.user.id).subscribe(x=>{
        this.oldRatingVal=x.value;
        this.form.controls.rating.setValue(x.value);
        console.log(x)
      })

    }
    this.initialized=true;
  
  }

  onConfirm(){
  this.rating.place=this.data.place;
  this.rating.trip = this.data.trip;
  this.rating.user=this.data.user;
  this.rating.value=this.form.controls.rating.value;
  console.log(this.rating);
    this.placeService.createRating(this.rating).subscribe(x=>{
      console.log(x)
      this.dialogRef.close();
    })
    
  }

  cancel(){
    this.dialogRef.close();
  }

}
