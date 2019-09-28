import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place, Trip } from 'src/app/shared/models/classes';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddPlaceToTripDialogComponent } from '../add-place-to-trip-dialog/add-place-to-trip-dialog.component';
import { TripService } from 'src/app/shared/services/trip.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent implements OnInit {
  form: FormGroup;
  fillingForm: boolean = true;
  choosePlaces: boolean = false;
  places: Place[];
  trip: Trip = new Trip();
  added: boolean = false;
  addButton: string = "Dodaj";
  addButtonIcon: string = "add_circle";

  constructor(private fb: FormBuilder, private placeService: PlaceService, private tripService: TripService,
    private router: Router, private route: ActivatedRoute, public dialog: MatDialog) {

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
  onCreate() {

    if (this.form.controls.region.value != "" && this.form.controls.region.value != null) {
      this.trip.name = this.form.controls.name.value;
      this.trip.country = this.form.controls.country.value;
      this.trip.region = this.form.controls.region.value;
      this.trip.duration = this.form.controls.duration.value;
      this.trip.description = this.form.controls.description.value;
      this.tripService.createTrip(this.trip).subscribe(x => {
        console.log(x);
      })
      this.fillingForm = false;
      this.placeService.getPlacesByRegCat(this.form.controls.region.value, "").subscribe(x => {
        this.places = x;
        console.log(this.places);

      })
    }
  }
  onBack() {
    this.fillingForm = true;

  }

  more() {
    this.router.navigate(['/all-places']);
  }

  onAdd(place: Place) {
    console.log(place);

    this.addButton = "Dodano";
    this.addButtonIcon = "done";
    if (!this.added) {

      const dialogRef = this.dialog.open(AddPlaceToTripDialogComponent, {
        width: '600px',
        data: { place }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    }
    this.added = true;




  }

}
