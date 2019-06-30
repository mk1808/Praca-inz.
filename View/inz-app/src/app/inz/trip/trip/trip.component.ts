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
  {id: 1, name: "Muzeum Narodowe", location:"Warszawa", photo:"https://rosenthalblog.files.wordpress.com/2019/02/muzeum-narodowe.jpg"},
  {id: 2, name: "miejsce002", location:"Warszawa", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Warszawa-Zamek_Kr%C3%B3lewski.jpg/1024px-Warszawa-Zamek_Kr%C3%B3lewski.jpg"},
  {id: 3, name: "miejsce003", location:"Warszawa", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Palac_Lazienki%2CWarszawa%2CPolska%2CUE._-_panoramio_%2841%29.jpg/800px-Palac_Lazienki%2CWarszawa%2CPolska%2CUE._-_panoramio_%2841%29.jpg"},
  {id: 4, name: "miejsce004", location:"Warszawa", photo:"https://www.defor.eu/wp-content/uploads/2018/04/1cnk5.jpg"},
  {id: 5, name: "miejsce005", location:"Warszawa", photo:"https://images.pexels.com/photos/77382/palac-kultury-palace-culture-pkin-kinoteka-77382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}, 
];
  constructor(private componentsService:ComponentsService) { }
  latitude = 50.026783;
  longitude = 21.984447; 
  mapType = 'roadmap';
  ngOnInit() {
    this.hover=false;
  }

onHover(i){
  this.hover=true;
  let item=this.tableContent[i];
  this.componentsService.setTableItem(item);
}
}
