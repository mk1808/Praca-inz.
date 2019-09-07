import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/shared/models/classes';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/shared/services/place.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';

@Component({
  selector: 'app-all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.scss']
})


export class AllPlacesComponent implements OnInit {

  places: Place[];
  filteredPlaces: Place[];
  stateCtrl = new FormControl();
  filteredStates: Observable<any[]>;
  filteredRegions: String[];
  initialized: boolean = false;
  form: FormGroup;
  categories: String[];

  constructor(private router: Router, private route: ActivatedRoute, private placeService: PlaceService,
    private dictionaryService: DictionaryService, private fb: FormBuilder) {

    this.form = this.fb.group({
      name: [null],
      category: [null],
      region: [null]
    });
    this.initialized = true;

    this.form.controls.name.valueChanges.subscribe(y => {
      console.log(y);
      this.placeService.getPlacesFiltered(y).subscribe(x => {
        this.filteredPlaces = x;
        console.log(this.filteredPlaces);

      })

    })


    this.form.controls.region.valueChanges.subscribe(z => {
      console.log(z);
      this.placeService.getRegionsFiltered(z).subscribe(a => {
        this.filteredRegions = a;
        console.log(this.filteredRegions);

      })

    })



  }


  placesTab: any[] = [
  ];




  ngOnInit() {


    this.placeService.getPlaces().subscribe(x => {
      this.places = x;
      console.log(this.places);

    })

    this.dictionaryService.getCategories().subscribe(x => {
      this.categories = x;
      console.log(this.categories);
    })



  }






}
