import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Place } from 'src/app/shared/models/classes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-place-to-trip-dialog',
  templateUrl: './add-place-to-trip-dialog.component.html',
  styleUrls: ['./add-place-to-trip-dialog.component.scss']
})
export class AddPlaceToTripDialogComponent implements OnInit {
initialized:boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  public dialogRef: MatDialogRef<AddPlaceToTripDialogComponent>,
  private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    
    this.initialized=true;
    console.log(this.data);
    console.log(this.data.place.name)
  }

  checkTrip(){
    this.router.navigate(['/trip/details/'+this.data.id]);
  }

  cancel(){
    this.dialogRef.close();
  }

}
