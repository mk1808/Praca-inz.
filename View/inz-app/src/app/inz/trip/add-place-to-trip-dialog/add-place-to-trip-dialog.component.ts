import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Place } from 'src/app/shared/models/classes';

@Component({
  selector: 'app-add-place-to-trip-dialog',
  templateUrl: './add-place-to-trip-dialog.component.html',
  styleUrls: ['./add-place-to-trip-dialog.component.scss']
})
export class AddPlaceToTripDialogComponent implements OnInit {
initialized:boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    
    this.initialized=true;
    console.log(this.data);
    console.log(this.data.place.name)
  }

}
