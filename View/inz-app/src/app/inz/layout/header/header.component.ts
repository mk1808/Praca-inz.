import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
status:boolean;
  constructor(private auth:AuthService, private router: Router, private cookie:CookieService) { }

  ngOnInit() {
    this.auth.currentStatus.subscribe(status=>{
      this.status=status;
      console.log(this.status);
     // this.status=true;
    })


  }

  onLogOut(){
    this.cookie.deleteAll('*');
    this.router.navigate(['/']);
    this.auth.changeStatus(false);
  }

}
