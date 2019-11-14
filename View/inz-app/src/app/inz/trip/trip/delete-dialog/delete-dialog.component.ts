import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TripService } from 'src/app/shared/services/trip.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
initialized=false;
before=true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router,
   private route: ActivatedRoute, private cookie: CookieService,
  private tripService: TripService,  public dialogRef: MatDialogRef<DeleteDialogComponent>) { }

  ngOnInit() {
    console.log(this.data)
    this.initialized=true;
    
  }

  deletePlace(){
 
    this.tripService.deletePositionFromTrip(this.data.place.id, this.data.trip.id).subscribe(x=>{
      console.log(x);
      this.before=false;
    })

  }

  cancel(){
    this.dialogRef.close();
  }

}
