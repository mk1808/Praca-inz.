import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { HourDialogComponent } from './hour-dialog/hour-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder, public dialog: MatDialog) { 
    this.form = this.fb.group({
        start: [null, Validators.required],
        end: [null, Validators.required]
      })
  }

  ngOnInit() {
     
  }
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
];

done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
];

next = [
    'Get up2',
    'Brush teeth2',
    'Take a shower2',
    'Check e-mail2',
    'Walk dog2'
];

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
}
