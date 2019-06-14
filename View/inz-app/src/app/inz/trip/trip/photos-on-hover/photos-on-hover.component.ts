import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/shared/services/components.service';

@Component({
  selector: 'app-photos-on-hover',
  templateUrl: './photos-on-hover.component.html',
  styleUrls: ['./photos-on-hover.component.scss']
})
export class PhotosOnHoverComponent implements OnInit {
item;
  constructor(private componentsService:ComponentsService) { 
    
  }

  ngOnInit() {
    
    this.componentsService.eventEmitter.subscribe(x=>{
      console.log(x);
    })

  }

}
