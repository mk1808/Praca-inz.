import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
status:boolean;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.currentStatus.subscribe(status=>{
      this.status=status;
      console.log(this.status);
    })


  }

}
