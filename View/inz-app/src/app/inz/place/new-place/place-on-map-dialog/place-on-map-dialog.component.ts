import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';

@Component({
  selector: 'app-place-on-map-dialog',
  templateUrl: './place-on-map-dialog.component.html',
  styleUrls: ['./place-on-map-dialog.component.scss']
})
export class PlaceOnMapDialogComponent implements OnInit {
form:FormGroup;
initialized=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb:FormBuilder, 
  private placeService:PlaceService,  public dialogRef: MatDialogRef<PlaceOnMapDialogComponent>) { }

  ngOnInit() {
    console.log(this.data)
    this.form = this.fb.group({
  
    })
    this.initialized=true;
  }

}
