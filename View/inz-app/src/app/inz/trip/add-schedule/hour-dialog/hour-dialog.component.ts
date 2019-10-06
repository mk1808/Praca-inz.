import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PositionInSchedule } from 'src/app/shared/models/classes';
import { ScheduleService } from 'src/app/shared/services/schedule.service';


@Component({
  selector: 'app-hour-dialog',
  templateUrl: './hour-dialog.component.html',
  styleUrls: ['./hour-dialog.component.scss']
})
export class HourDialogComponent implements OnInit {
  form: FormGroup;
  position:PositionInSchedule=new PositionInSchedule();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private formBuilder: FormBuilder, private scheduleService:ScheduleService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      hourStart:'',
      hourEnd:'',
      
    })
    console.log(this.data);
  }

  addHour(){

    ///this.position.startDay

  }

}
