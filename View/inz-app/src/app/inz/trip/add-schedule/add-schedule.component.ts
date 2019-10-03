import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { HourDialogComponent } from './hour-dialog/hour-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from 'src/app/shared/services/trip.service';
import { Trip, Schedule, Place } from 'src/app/shared/models/classes';
import { ScheduleService } from 'src/app/shared/services/schedule.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss']
})
export class AddScheduleComponent implements OnInit {
form: FormGroup;
fillingForm: boolean = true;
days:number;
dayCount=false;
id:number;
trip:Trip=new Trip();
places:Place[]=[];
todo = [
    
];

done = [
    
];

next = [
   
];
schedule:Schedule=new Schedule();
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, 
    private tripService:TripService, private scheduleService:ScheduleService, public dialog: MatDialog) { 
    this.form = this.fb.group({
        start: [null, Validators.required],
        end: [null, Validators.required]
      })
  }

  ngOnInit() {
    this.route.params.subscribe(x => {
        this.id = x['id'];
        this.tripService.getTrip(this.id).subscribe(y=>{
            this.trip=y;
            this.done=[];
            console.log(this.trip);
            this.tripService.getPlacesForTrip(this.id).subscribe(z=>{
                this.places=z;
                console.log(this.places);
                this.places.forEach(position=>{
                    this.done.push(position.name);
            })
              })
            
           
        })
    
})

  }




drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
    }
}

dropn(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
    }
}



timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
];

drop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);


    {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }
}

openDial(item)
{
    
    const dialogRef = this.dialog.open(HourDialogComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  

}


countDays(){
    if(this.form.controls.start.value!=null&&this.form.controls.end.value!=null)
    {
        this.dayCount=true;
        let startDate = new Date(this.form.controls.start.value);
        let endDate = new Date(this.form.controls.end.value);
        console.log(startDate);
        this.days = Number(endDate.getDate())-Number(startDate.getDate());
        console.log(this.days);
    }
}

onCreate(){
    this.fillingForm=false;
    this.schedule=this.trip.schedule;
    this.schedule.start=this.form.controls.start.value;
    this.schedule.end=this.form.controls.end.value;
    this.scheduleService.updateSchedule(this.schedule).subscribe(x=>{
        console.log(x);
    })

    
}
}
