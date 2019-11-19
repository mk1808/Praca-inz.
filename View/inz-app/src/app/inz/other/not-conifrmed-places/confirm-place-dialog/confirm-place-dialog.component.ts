import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlaceService } from 'src/app/shared/services/place.service';

@Component({
  selector: 'app-confirm-place-dialog',
  templateUrl: './confirm-place-dialog.component.html',
  styleUrls: ['./confirm-place-dialog.component.scss']
})
export class ConfirmPlaceDialogComponent implements OnInit {
  initialized=false;
  before=true;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  
    private placeService:PlaceService,  public dialogRef: MatDialogRef<ConfirmPlaceDialogComponent>) { }
  


  ngOnInit() {
  }

  onConfirm(){
  
      
    }
  
    cancel(){
      this.dialogRef.close();
    }

}
