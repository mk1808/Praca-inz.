import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OpeningHours } from '../models/classes';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

private placeTableItem;

private eventSource=  new Subject<any>();
public eventEmitter = this.eventSource.asObservable();
  constructor() { }

  public setTableItem(item){
    this.eventSource.next(item);
    
  }

  public getTableItem():Observable<any>{
    return this.placeTableItem;
  }

  public getHoursForDays(hours:OpeningHours){
   let allDaysString: string[] = [null, null, null, null, null, null, null];
   let allDays: any[] = [{ start: null, end: null }, { start: null, end: null }, { start: null, end: null }, { start: null, end: null }
    , { start: null, end: null }, { start: null, end: null }, { start: null, end: null }];
   let allDaysSorted: any[] = [{ start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] },
    { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }, { start: null, end: null, ids: [] }]
   let daysOfWeek: string[] = ["Pon", "Wt", "Śr", "Czw", "Pt", "So", "Ndz"]

  
    if (hours.mon) {
      allDaysString[0] = (hours.monOpen + ' - ' + hours.monClose);
        allDays[0].start = hours.monOpen;
        allDays[0].end = hours.monClose;
      }

      if (hours.tue) {
     allDaysString[1] = (hours.tueOpen + ' - ' + hours.tueClose);
        allDays[1].start = hours.tueOpen;
        allDays[1].end = hours.tueClose;
      }

      if (hours.wed) {
    allDaysString[2] = (hours.wedOpen + ' - ' + hours.wedClose);
        allDays[2].start = hours.wedOpen;
        allDays[2].end = hours.wedClose;
      }

      if (hours.thu) {
    allDaysString[3] = (hours.thuOpen + ' - ' + hours.thuClose);
        allDays[3].start = hours.thuOpen;
        allDays[3].end = hours.thuClose;
      }

      if (hours.fri) {
      allDaysString[4] = (hours.friOpen + ' - ' + hours.friClose);
        allDays[4].start = hours.friOpen;
        allDays[4].end = hours.friClose;
      }

      if (hours.sat) {
      allDaysString[5] = (hours.satOpen + ' - ' + hours.satClose);
        allDays[5].start = hours.satOpen;
        allDays[5].end = hours.satClose;
      }

      if (hours.sun) {
      allDaysString[6] = (hours.sunOpen + ' - ' + hours.sunClose);
        allDays[6].start = hours.sunOpen;
        allDays[6].end = hours.sunClose;
      }

      let i = 0;
      /*  do{
          let start = allDaysString[i];

        }while(1)*/
      let start = allDaysString[0];
      let tab: [] = [];
      let j = -1;
      let repeated: boolean = false;
      let length;
      for (let i = 0; i < 7; i++) {
        if (allDaysString[i] != null) {
          allDaysSorted.forEach(x => {
            if (x.start == allDaysString[i]) {
              x.ids.push(daysOfWeek[i]);

              repeated = true;

            }
          })
          if (!repeated) {
            j++;
            allDaysSorted[j].start = allDaysString[i];
            allDaysSorted[j].ids.push(daysOfWeek[i]);
          }


        }

        let start = allDaysString[i];
      }
      console.log(allDaysSorted);

      let index = 0;
      let mult = false;
      let k = 0;
      allDaysSorted[0].ids = "Pn"
      for (k = 1; k < 7; k++) {
        if (allDaysString[k] == allDaysString[k - 1]) {
          mult = true;
        }
        else {
          if (mult) {
            allDaysSorted[index].ids += '-' + daysOfWeek[k - 1];
            allDaysSorted[index].start = allDaysString[k - 1] == null ? "nieczynne" : allDaysString[k - 1];
          } else {
            allDaysSorted[index].start = allDaysString[k - 1] == null ? "nieczynne" : allDaysString[k - 1];
          }
          index++;
          allDaysSorted[index].ids = daysOfWeek[k];
          mult = false;
        }
      }
      if (mult) {
        allDaysSorted[index].ids += '-' + daysOfWeek[k - 1];
        allDaysSorted[index].start = allDaysString[k - 1] == null ? "nieczynne" : allDaysString[k - 1];
      } else {
        allDaysSorted[index].start = allDaysString[k - 1] == null ? "nieczynne" : allDaysString[k - 1];
      }
    
    return allDaysSorted;
  }

}
