import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  hover=false;

  tableContent:any[] = [
    {id: 1, name: "Wycieczka1", country:"Polska",region:"dolnośląskie", time:"4", places:"6", shared:"Tak"},
    {id: 2, name: "Wycieczka3", country:"Polska",region:"dolnośląskie", time:"4", places:"6",shared:"Tak"},
    {id: 3, name: "Wycieczka4", country:"Polska",region:"dolnośląskie", time:"4", places:"6", shared:"Nie"},
    {id: 4, name: "Wycieczka2", country:"Polska",region:"dolnośląskie", time:"4", places:"6",shared:"Tak"},

  ];
  constructor(private router: Router, private route: ActivatedRoute, private cookie:CookieService) { }

  ngOnInit() {
    if (this.cookie.get('user') == "") {
      this.router.navigate(['/']);
    }
  }

}
