import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from 'src/app/shared/services/trip.service';
import { Trip, Schedule, PositionInSchedule, Place } from 'src/app/shared/models/classes';
import { ScheduleService } from 'src/app/shared/services/schedule.service';
import { ComponentsService } from 'src/app/shared/services/components.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  ngAfterViewInit(): void {
    this.res = this.targetElement;
    this.componentService.heightObj=this.res;
    console.log(this.res.nativeElement.offsetHeight);this.checkHeight()
  }
  id: number;
  trip: Trip = new Trip();
  schedule:Schedule = new Schedule();
  positions:PositionInSchedule[][]=[];
  allPositions:PositionInSchedule[][]=[];
  positionsWODay:PositionInSchedule[]=[];
  tabOpeningHours:any[]=[];
  places:Place[]=[];
  allDaysSortedFinal: any[] = [{ start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] },
  { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }];
 icons:[]=[];
 res:any;
 @ViewChild('doc') targetElement: any;
 @Input() inTrip: boolean=false;
  constructor(private router: Router, private route: ActivatedRoute, private tripService: TripService,
    private scheduleService: ScheduleService,  private componentService:ComponentsService) { }

  ngOnInit() {
    this.componentService.heightObj=this.res;
    this.route.params.subscribe(x => {
      this.id = x['id'];
      this.tripService.getTrip(this.id).subscribe(y => {
        this.trip = y;
        this.schedule=this.trip.schedule;
        this.checkHeight();
       });
      

    this.tripService.getPlacesForTrip(this.id).subscribe(z=>{
      this.places=z;
      this.places.forEach(position=>{
        this.tabOpeningHours[position.name]=this.componentService.getHoursForDays(position.hours);
        this.icons[position.name]=this.componentService.getIconForPlace(position.category);
        this.checkHeight();
    })
    console.log(this.icons);
    console.log(this.tabOpeningHours);
    })    
        

     //   this.positions=this.trip.
      //  console.log(this.schedule);
     
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

        this.positionsWODay=this.allPositions.pop();
        this.positions=this.allPositions;
        console.log(this.positions);
        this.checkHeight();
        
      })

    })
  }
  checkHeight(){
    setTimeout(()=>{
      this.componentService.paralaxEventSource.next(this.res.nativeElement.offsetHeight);
    }, 2);
  }



}
