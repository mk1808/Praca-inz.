import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/shared/services/trip.service';
import { ScheduleService } from 'src/app/shared/services/schedule.service';
import { Trip } from 'src/app/shared/models/classes';

@Component({
  selector: 'app-add-schedule-dates',
  templateUrl: './add-schedule-dates.component.html',
  styleUrls: ['./add-schedule-dates.component.scss']
})
export class AddScheduleDatesComponent implements OnInit {
  form: FormGroup;
  id;
  trip:Trip=new Trip;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
    private tripService: TripService, private scheduleService: ScheduleService) {
    this.form = this.fb.group({
      start: [null, Validators.required],
      end: [null, Validators.required]
  })
   }


   ngOnInit() {
    // this.notifier.notify( 'default', 'Obiekt może nie być otwarty w tym dniu.' );
    this.route.params.subscribe(x => {
        this.id = x['id'];
        console.log(this.id)
        this.tripService.getTrip(this.id).subscribe(y => {
            this.trip = y;
            console.log(this.trip);

        })


    })

}
}
