import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { ApiService } from './api.service';
import {FilterPipe} from './app.filter'
@NgModule({
  imports:      [ BrowserModule , 
  				HttpClientModule,FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent ,FilterPipe],
  providers: [ApiService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
