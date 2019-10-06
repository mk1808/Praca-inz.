import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-hour-dialog',
  templateUrl: './hour-dialog.component.html',
  styleUrls: ['./hour-dialog.component.scss']
})
export class HourDialogComponent implements OnInit {
  form: FormGroup;
  constructor(   private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<HourDialogComponent>) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      hourStart:'',
      hourEnd:'',
      
    })
  }

  addHour(){

  }

}
