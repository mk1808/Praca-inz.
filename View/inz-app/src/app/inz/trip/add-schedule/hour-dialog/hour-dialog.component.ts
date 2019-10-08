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
  day:Date;
  open;
  close;
  dayOpen:boolean;
  hourCorrect:boolean;
  newPosition:PositionInSchedule=new PositionInSchedule();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private formBuilder: FormBuilder, private scheduleService:ScheduleService,
  public dialogRef: MatDialogRef<HourDialogComponent>) {
    const{trip,place,day}=this.data; 
  this.trip=trip;
  this.place=place;
  this.day=day;
  
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      hourStart:[null],
      hourEnd:[null],
      
    })
    this.scheduleService.getPositionInSchedule(this.place.id, this.trip.id).subscribe(x=>{
      this.position=x;
    })
    console.log(this.data);
     

  } 

  addHour() {
    this.scheduleService.updatePositionInSchedule(this.position).subscribe(x => {
      console.log(x);
      this.newPosition=x;
        this.dialogRef.close([this.place, this.newPosition, this.hourCorrect]);
    })
  
  }

  isCorrect() {
    if (this.form.controls.hourStart.value != null && this.form.controls.hourEnd.value != null) {
      this.position.startTime = this.form.controls.hourStart.value;
      this.position.endTime = this.form.controls.hourEnd.value;
      this.position.startDay = this.day;
      let dayOfWeek = this.day.getDay();
      switch (dayOfWeek) {
        case 0:
          this.dayOpen = this.place.hours.mon;
          this.open = this.place.hours.monOpen;
          this.close = this.place.hours.monClose;
          break;
        case 1:
          this.dayOpen = this.place.hours.tue;
          this.open = this.place.hours.tueOpen;
          this.close = this.place.hours.tueClose;
          break;
        case 2:
          this.dayOpen = this.place.hours.wed;
          this.open = this.place.hours.wedOpen;
          this.close = this.place.hours.wedClose;
          break;
        case 3:
          this.dayOpen = this.place.hours.thu;
          this.open = this.place.hours.thuOpen;
          this.close = this.place.hours.thuClose;
          break;
        case 4:
          this.dayOpen = this.place.hours.fri;
          this.open = this.place.hours.friOpen;
          this.close = this.place.hours.friClose;
          break;
        case 5:
          this.dayOpen = this.place.hours.sat;
          this.open = this.place.hours.satOpen;
          this.close = this.place.hours.satClose;
          break;
        case 6:
          this.dayOpen = this.place.hours.sun;
          this.open = this.place.hours.sunOpen;
          this.close = this.place.hours.sunClose;
          break;
      }
      console.log(dayOfWeek);
      this.scheduleService.isCorrectHour(this.open, this.close, this.position.startTime, this.position.endTime).subscribe(x => {
        this.hourCorrect = x;
        console.log(this.hourCorrect);
      })
    }


  }

}
