import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { Place, Rating } from '../models/classes';

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

public getPlacesFiltered(place:string): Observable<Place[]> {

  return this.rest.get('/api/places/filter' + '?name=' + place, true);
}

public getRegionsFiltered(region:string): Observable<String[]> {

  return this.rest.get('/api/places/filter2' + '?region=' + region, true);
}

public getPlacesByRegCat(region:string, category:string): Observable<Place[]> {
//region/category?region=dolnoslaskie&category=MUSEUM
  return this.rest.get('/api/places/region/category/'+'?region=' + region + '&category='+ category);
}

public getPlacesByUser(id:number): Observable<Place[]> {

  return this.rest.get('/api/places/user/' + id);
}

public createPlace(place: Place): Observable<Place> {
  return this.rest.post('/api/places', place);
}

public createRating(rating: Rating): Observable<Rating> {
  return this.rest.post('/api/rating', rating);
}

public getRatingByTripAndUser(trip:number, user:number): Observable<Rating> {

  return this.rest.get('/api/rating/trip'+'?trip='+trip+'&user='+user);
}


public getRatingByPlaceAndUser(place:number, user:number): Observable<Rating> {

  return this.rest.get('/api/rating/place'+'?place='+place+'&user='+user);
}


public getUncheckedPlaces(): Observable<Place[]> {

  return this.rest.get('/api/places/notchecked');
}

public updatePlace(place:Place):Observable<Place>{
  return this.rest.put('/api/places/',place )
}

public markPlaceAsChecked(id:number):Observable<any>{
  return this.rest.put('/api/places/checked/'+id,"")
}


}
