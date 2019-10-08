import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { HourDialogComponent } from './hour-dialog/hour-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from 'src/app/shared/services/trip.service';
import { Trip, Schedule, Place } from 'src/app/shared/models/classes';
import { ScheduleService } from 'src/app/shared/services/schedule.service';
import { NotifierService } from 'angular-notifier';
import { PlaceService } from 'src/app/shared/services/place.service';

export class TripPlace{
    trip:Trip;
    place:Place;
}
@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss']
})

export class AddScheduleComponent implements OnInit {
form: FormGroup;
fillingForm: boolean = false;
days:number;
dayCount=false;
id:number;
trip:Trip=new Trip();
places:Place[]=[];
allDays=[];
allDates=[];
todo = [
    
];

done = [
    
];

next = [
   
];

list=[];
dates=[];
correctPosition=false;
tripPlace;
schedule:Schedule=new Schedule();
notifier: NotifierService;
placeToAdd:Place=new Place();
openHours:any[]=[];
openHoursForDay:any[]=[];
placeInitialized:boolean=false;
tab:any[]=[];
tabScheduleHours:any[]=[];
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, 
    private tripService:TripService, private placeService:PlaceService, private scheduleService:ScheduleService, public dialog: MatDialog,
    notifierService: NotifierService) { 
        this.notifier = notifierService;
    this.form = this.fb.group({
        start: [null, Validators.required],
        end: [null, Validators.required]
      })
  }

  ngOnInit() {
    this.notifier.notify( 'default', 'Obiekt może nie być otwarty w tym dniu.' );
    this.route.params.subscribe(x => {
        this.id = x['id'];
        this.tripService.getTrip(this.id).subscribe(y=>{
            this.trip=y;
            this.done=[];
          //  let firstDay:Date=new Date(this.trip.schedule.start);
            for (let i=0; i<this.trip.duration; i++){
                this.allDays.push([]);
                let firstDay:Date=new Date(this.trip.schedule.start);
                console.log(firstDay);
                firstDay.setDate(firstDay.getDate()+i);
                this.allDates.push(firstDay);
                //this.dates.push(this.trip.schedule.start.getDate() );
            }
            
            
            console.log(this.allDates);
            console.log(this.trip);
            console.log(this.allDays);
            this.tripService.getPlacesForTrip(this.id).subscribe(z=>{
                this.places=z;
                console.log(this.places);
                this.placeInitialized=true;
                this.places.forEach(position=>{
                    this.done.push(position.name);
                    

            })

            
                let i=0;
                this.places.forEach(position=>{
                    this.openHoursForDay=[];
                    this.openHoursForDay.push(position.name);
                    this.openHoursForDay.push(position.hours.mon);
                    this.openHoursForDay.push(position.hours.tue);
                    this.openHoursForDay.push(position.hours.wed);
                    this.openHoursForDay.push(position.hours.thu);
                    this.openHoursForDay.push(position.hours.fri);
                    this.openHoursForDay.push(position.hours.sat);
                    this.openHoursForDay.push(position.hours.sun);
               
                    i++;
                    this.openHours.push(this.openHoursForDay);
                    
        
            })
            console.log(this.openHours);
              })
            
           
        })

    
})

  }




drop(event: CdkDragDrop<string[]>, k:number) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
    }
    console.log(event.container.data);
    console.log(this.openHours);
    if(event.container.id!="cdk-drop-list-2"){
     
        this.openHours.forEach(x=>{
            console.log(x);
        if(x[0]==event.container.data[0]){
         //   console.log(x[0]);
           // console.log(event.container.data[0]);
      let onlyDays=[...x];
      onlyDays.shift();
      


      
             
           // console.log(tab);
            console.log(onlyDays);
console.log(this.allDates[k].getDay());
this.scheduleService.isCorrectDay(onlyDays,this.allDates[k].getDay()).subscribe(x=>{
    this.correctPosition=x;
    this.tab["openDay"]=x;
    
    this.tab[event.container.data[0]]=x?'c':'d';
        console.log(this.tab);
})
console.log(this.allDays);

       }
       })
        
        //przeciagniety na jedno z miejc  
    }
   else console.log("notok") 
  //  console.log(event.previousContainer);
  
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




openDial(item, dayDate)
{
  /*  let i11 = this.allDays[0][0];
    let i12345=this.allDays[0][1];
    let imiejsce=this.allDays[0][2];
    this.allDays[0][2]=i11;
    this.allDays[0][1]=i12345;
    this.allDays[0][0]=imiejsce;*/

   this.places.forEach(element => {
       if (element.name==item)
       this.placeToAdd=element;
   });

  
    console.log(this.tripPlace);
    const dialogRef = this.dialog.open(HourDialogComponent, {
      width: '600px',
      data: {trip:this.trip, place:this.placeToAdd, day:dayDate}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
      this.tabScheduleHours[result[0].name]=result[1].startTime+' - '+result[1].endTime;
    // console.log(result[2]);
      this.tabScheduleHours[result[0].name+'H']=result[2];
      this.tab[result[0].name]=result[2]?'c':'h';
      console.log(this.tabScheduleHours);
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
