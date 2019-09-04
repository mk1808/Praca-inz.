import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { Trip, Place } from '../models/classes';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient, private cookie:CookieService,private rest:RestService) { }

  public getTrips(): Observable<Trip[]> {
   
    return this.rest.get<Trip[]>('/api/trips');
}

public getTrip(id:number): Observable<Trip> {
   
  return this.rest.get<Trip>('/api/trips/'+id);
}

public getPlacesForTrip(id:number): Observable<Place[]> {
   
  return this.rest.get<Place[]>('/api/positionInTrip/trip/'+id);
}
}
