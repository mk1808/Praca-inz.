import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from './rest.service';
import { Schedule } from '../models/classes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient, private cookie:CookieService, private rest:RestService) { 
  }

  public updateSchedule(schedule:Schedule): Observable<any> { 
  
    return this.rest.put<any>('/api/schedule/'+schedule.id,schedule );
  }
}
