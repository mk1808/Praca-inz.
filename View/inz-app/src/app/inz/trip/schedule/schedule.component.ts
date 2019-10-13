import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from 'src/app/shared/services/trip.service';
import { Trip, Schedule, PositionInSchedule } from 'src/app/shared/models/classes';
import { ScheduleService } from 'src/app/shared/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  id: number;
  trip: Trip = new Trip();
  schedule:Schedule = new Schedule();
  positions:PositionInSchedule[][]=[];
  allPositions:PositionInSchedule[][]=[];
  constructor(private router: Router, private route: ActivatedRoute, private tripService: TripService,
    private scheduleService: ScheduleService) { }

  ngOnInit() {

    this.route.params.subscribe(x => {
      this.id = x['id'];
      this.tripService.getTrip(this.id).subscribe(y => {
        this.trip = y;
        this.schedule=this.trip.schedule;
     //   this.positions=this.trip.
      //  console.log(this.schedule);
      });
     /* this.scheduleService.getPositionsForScheduleByTrip(this.id).subscribe(x=>{
        this.positions=x;
       
        console.log(this.positions);
      })*/

      this.scheduleService.getPositionsForScheduleByTripSorted(this.id).subscribe(x=>{
        this.allPositions=x;
      /*  this.allPositions.forEach(x=>{
          if(x.length>0){
            this.positions.push(x);
          }
        })*/
        this.positions=this.allPositions;
        console.log(this.positions);
        
      })

    })
  }


}