import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.scss']
})
export class NewPlaceComponent implements OnInit {
categories:any[]=["muzeum", "galeria sztuki", "park", "pomnik"]
  constructor() { }

  ngOnInit() {
  }

}
