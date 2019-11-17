import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/shared/services/trip.service';
import { ScheduleService } from 'src/app/shared/services/schedule.service';
import { Trip, Schedule } from 'src/app/shared/models/classes';

@Component({
  selector: 'app-add-schedule-dates',
  templateUrl: './add-schedule-dates.component.html',
  styleUrls: ['./add-schedule-dates.component.scss']
})
export class AddScheduleDatesComponent implements OnInit {
  form: FormGroup;
  id;
  trip:Trip=new Trip;
  dayCount = false;
  days: number;
  editing=false;

  schedule: Schedule = new Schedule();
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
    private tripService: TripService, private scheduleService: ScheduleService) {
    this.form = this.fb.group({
      start: [null, Validators.required],
      end: [null, Validators.required]
  })
   }


   ngOnInit() {
    this.editing=this.router.url.includes("edit");
    this.route.params.subscribe(x => {
        this.id = x['id'];
        console.log(this.id)
        this.tripService.getTrip(this.id).subscribe(y => {
            this.trip = y;
            console.log(this.trip);
        if(this.editing){
          this.form.controls.start.setValue(this.trip.schedule.start);
          this.form.controls.end.setValue(this.trip.schedule.end);
        }

        })


    })

}


countDays() {
  if (this.form.controls.start.value != null && this.form.controls.end.value != null) {
      this.dayCount = true;
      let startDate = new Date(this.form.controls.start.value);
      let endDate = new Date(this.form.controls.end.value);
      let start: string;
      let end: string;
      start = startDate.getDate() + '-' + Number(startDate.getMonth() + 1) + '-' + startDate.getFullYear();
      end = endDate.getDate() + '-' + Number(endDate.getMonth() + 1) + '-' + endDate.getFullYear();
      this.scheduleService.getDifferenceBetweenDays(start, end).subscribe(x => {
          this.days = x;
      })
      console.log(this.days);
  }
}

onCreate() {

  this.schedule = this.trip.schedule;
  this.schedule.start = this.form.controls.start.value;
  this.schedule.end = this.form.controls.end.value;
  this.scheduleService.updateSchedule(this.schedule).subscribe(x => {
      console.log(x);
      this.router.navigate(['/trip/new-schedule', this.id]);

  })


}
}
