import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComponentsService } from './shared/services/components.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'openlayers';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  constructor() {}
  title = 'inz-app';
  ngOnInit() {
  }
   
  }

/*

    this.spinner.show();
 
    setTimeout(() => {

      this.spinner.hide();
    }, 5000);
 */ 
 

