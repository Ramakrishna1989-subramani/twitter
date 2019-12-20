import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient){}
	getData(){
        
        return this.http.get('https://aravindtwitter.herokuapp.com/twittersearch?key=adobe')      
    }
}