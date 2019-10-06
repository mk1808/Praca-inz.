import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PositionInSchedule, Place, Trip } from 'src/app/shared/models/classes';
import { ScheduleService } from 'src/app/shared/services/schedule.service';
import { TripPlace } from '../add-schedule.component';


@Component({
  selector: 'app-hour-dialog',
  templateUrl: './hour-dialog.component.html',
  styleUrls: ['./hour-dialog.component.scss']
})
export class HourDialogComponent implements OnInit {
  form: FormGroup;
  position:PositionInSchedule=new PositionInSchedule();
  place:Place;
  trip:Trip;
  day;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private formBuilder: FormBuilder, private scheduleService:ScheduleService) {
    const{trip,place,day}=this.data; 
  this.trip=trip;
  this.place=place;
  this.day=day;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      hourStart:'',
      hourEnd:'',
      
    })
    this.scheduleService.getPositionInSchedule(this.place.id, this.trip.id).subscribe(x=>{
      this.position=x;
    })
    console.log(this.data);
     

  } 

  addHour(){

    this.position.startTime=this.form.controls.hourStart.value;
    this.position.endTime=this.form.controls.hourEnd.value;
    this.position.startDay=this.day;
    this.scheduleService.updatePositionInSchedule(this.position).subscribe(x=>{
      console.log(x);
    })
   

   

  }

}
