import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

private placeTableItem;
  constructor() { }

  public setTableItem(item){
    this.placeTableItem=item;
  }

  public getTableItem(){
    return this.placeTableItem;
  }
}
