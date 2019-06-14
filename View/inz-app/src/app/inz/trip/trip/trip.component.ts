import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/shared/services/components.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
hover=false;
tableContent:any[] = [
  {id: 1, name: "miejsce001", location:"Warszawa"},
  {id: 2, name: "miejsce002", location:"Warszawa"},
  {id: 3, name: "miejsce003", location:"Warszawa"},
  {id: 4, name: "miejsce004", location:"Warszawa"},
  {id: 5, name: "miejsce005", location:"Warszawa"}, 
];
  constructor(private componentsService:ComponentsService) { }

  ngOnInit() {
    this.hover=false;
  }

onHover(i){
  console.log(i);
  console.log(this.tableContent[i]);
  this.hover=true;
  let item=this.tableContent[i];
  this.componentsService.setTableItem(item);
}
}
