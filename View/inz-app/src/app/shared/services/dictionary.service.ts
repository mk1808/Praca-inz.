import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private rest:RestService) { }


  public getCategories(): Observable<String[]> {
   
    return this.rest.get<String[]>('/api/categories', true);
  }

  public getCountries(): Observable<String[]> {
   
    return this.rest.get<String[]>('/api/countries', true);
  }

  public getTags(): Observable<String[]> {
   
    return this.rest.get<String[]>('/api/tags',true);
  }

  public getPossibleCoordinates(name){
    return this.rest.get(`https://nominatim.openstreetmap.org/search/${name}?format=json`)
  }


}
