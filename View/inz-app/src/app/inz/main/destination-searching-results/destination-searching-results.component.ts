import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-destination-searching-results',
  templateUrl: './destination-searching-results.component.html',
  styleUrls: ['./destination-searching-results.component.scss']
})
export class DestinationSearchingResultsComponent implements OnInit {
  form: FormGroup;
  formTrip: FormGroup;
  initialized=false;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null],
      category: [""],
      region: [""]
    });
    
    this.formTrip = this.fb.group({
      durationFrom: [""],
      durationTo: [""],
      tags: [""],
      region: [""]
    });
    this.initialized = true;
  }

}
