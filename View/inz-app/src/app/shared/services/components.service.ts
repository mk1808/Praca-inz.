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

  public getHoursForDays(hours:OpeningHours):Observable<any>{
   let allDaysString: string[] = [null, null, null, null, null, null, null];
   let allDays: any[] = [{ start: null, end: null }, { start: null, end: null }, { start: null, end: null }, { start: null, end: null }
    , { start: null, end: null }, { start: null, end: null }, { start: null, end: null }];
 
  
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

    
    
    return this.placeTableItem;
  }

}
