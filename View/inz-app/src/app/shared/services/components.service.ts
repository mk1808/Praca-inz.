import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
}
