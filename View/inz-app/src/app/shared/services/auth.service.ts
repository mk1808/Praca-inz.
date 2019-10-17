import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from './rest.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/classes';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private statusSource = new BehaviorSubject<boolean>(false);
  currentStatus = this.statusSource.asObservable();

  constructor(private http: HttpClient, private cookie: CookieService, private rest:RestService) { }
  public logIn(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>('/api/auth/signin',
      user, httpOptions);
  }

  
  public register(user: User): Observable<any> {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>('/api/auth/signup', user, httpOptions);
  }

  public saveCookie(token:string, name:string){
    this.cookie.set(token, name, 0.5, "/");
  }

  public changeStatus(status:boolean){
    this.statusSource.next(status);
  }
}
