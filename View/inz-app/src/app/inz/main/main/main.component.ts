import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    
    
  ]
})
export class MainComponent implements OnInit {
   
  imageSources:string[]=['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/London_Eye_at_night_5.jpg/1280px-London_Eye_at_night_5.jpg', 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/06/ultra-wide-mistakes-lead-image.jpg',
'https://media.fshoq.com/images/150/arts-museum-louvre-in-paris-during-the-night-150-medium.jpg'];

 
  constructor() { }

  ngOnInit() {
  }
  flipDiv = false;
  onClick() {
    this.flipDiv = !this.flipDiv;
  }
  

  
}
