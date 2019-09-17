import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent implements OnInit {
form:FormGroup;

  constructor( private fb: FormBuilder) { 
   
    this.form = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      region: ['', Validators.required],
      duration: ['', Validators.required],
      description: [''],
    })
  }

  ngOnInit() {
    
  }

}
