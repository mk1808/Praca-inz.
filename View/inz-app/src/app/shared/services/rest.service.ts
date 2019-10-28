import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ComponentsService } from './components.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient, private cookieService: CookieService, private componentsService:ComponentsService) { }

  post<T>(url:string, body:any, wOLoader=false):Observable<T>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' +this.cookieService.get('token')
      })
    };
    if(!wOLoader){
    this.componentsService.busy();
    return this.http.post<T>(url,body,httpOptions).pipe(
      finalize  (() => {
        this.componentsService.idle();
      })
    );
  }
  else {
    return this.http.post<T>(url,body,httpOptions)
  }
}

get<T>(url:string, wOLoader=false):Observable<T>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' +this.cookieService.get('token')
      })
    };
    if(!wOLoader){
    this.componentsService.busy();
    return this.http.get<T>(url,httpOptions).pipe(
      finalize  (() => {
        this.componentsService.idle();
      }));}
      else {
        return this.http.get<T>(url,httpOptions);
      }
}

put<T>(url:string, body:any, wOLoader=false):Observable<T>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' +this.cookieService.get('token')
      })
    };
    if(!wOLoader){
    this.componentsService.busy();
    return this.http.put<T>(url,body,httpOptions).pipe(
      finalize  (() => {
        this.componentsService.idle();
      }));}
      else {
        return this.http.put<T>(url,body,httpOptions);
      }
}

delete<T>(url:string, wOLoader=false):Observable<T>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' +this.cookieService.get('token')
      })
    };
    if(!wOLoader){
    this.componentsService.busy();
    return this.http.delete<T>(url,httpOptions).pipe(
      finalize  (() => {
        this.componentsService.idle();
      }));
}
else{return this.http.delete<T>(url,httpOptions)}


}
}