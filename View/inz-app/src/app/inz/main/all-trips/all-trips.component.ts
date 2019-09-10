import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/shared/models/classes';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/shared/services/trip.service';

import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.scss']
})
export class AllTripsComponent implements OnInit {

  form: FormGroup;
  trips: Trip[];
  initialized = false;
  filteredTags: Trip[];
  filteredRegions: string[];


  constructor(private router: Router, private route: ActivatedRoute, private tripService: TripService,
    private fb: FormBuilder) {

    this.form = this.fb.group({
      durationFrom: [null],
      durationTo: [null],
      tags: [""],
      region: [""]
    });

    this.initialized = true;

    this.form.controls.tags.valueChanges.subscribe(y => {
      console.log(y);
      this.tripService.getPlacesFiltered(y).subscribe(x => {
        this.filteredTags = x;
        console.log(this.filteredTags);

      })

    })


    this.form.controls.region.valueChanges.subscribe(z => {
      console.log(z);
      this.tripService.getRegionsFiltered(z).subscribe(a => {
        this.filteredRegions = a;
        console.log(this.filteredRegions);

      })

    })

  }


  ngOnInit() {
    this.tripService.getTrips().subscribe(x => {
      this.trips = x;
      console.log(this.trips);
    })




  }





}
