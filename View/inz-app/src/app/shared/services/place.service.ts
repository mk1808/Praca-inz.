import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { Place } from '../models/classes';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient, private cookie:CookieService,private rest:RestService) { }

  public getPlaces(): Observable<Place[]> {
   
    return this.rest.get<Place[]>('/api/places');
}

public getPlace(id:number): Observable<Place> {
   
  return this.rest.get<Place>('/api/places/'+id);
}
}
