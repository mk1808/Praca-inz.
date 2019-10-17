import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
status:boolean;
  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.currentStatus.subscribe(status=>{
      this.status=status;
      console.log(this.status);
     // this.status=true;
    })


  }

  onLogOut(){
    this.auth.changeStatus(false);
    this.router.navigate(['/'])
  }

}
