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
  
  private statusSourceAdmin = new BehaviorSubject<boolean>(false);
  currentStatusAdmin = this.statusSourceAdmin.asObservable();


  constructor(private http: HttpClient, private cookie: CookieService, private rest: RestService) {
    if (this.cookie.get('token')) {
      this.changeStatus(true);
      let user = JSON.parse(this.cookie.get("user"));
      console.log(JSON.parse(this.cookie.get("user")));
      console.log(user.role.id);
      if (user.role.id != '1'){
        this.changeStatusAdmin(true);
        console.log("changedAdmin");}
        else console.log("changedUser")   
    }
  }
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

  public deleteCookie(token:string, name:string){
    this.cookie.set(token, name, -0.5, "/");
  }
  

  public changeStatus(status:boolean){
    this.statusSource.next(status);
  }

  
  public changeStatusAdmin(status:boolean){
    this.statusSourceAdmin.next(status);
  }
}
