import { Component ,OnInit} from '@angular/core';
// import { FormControl,FormsModule } from '@angular/forms';
import { ApiService } from './api.service';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/app.component.html'  
})

export class AppComponent implements OnInit{

   constructor(private apiService: ApiService) {  }
   configUrl: string = 'Welcome';
   arrayJson: any ; 

   getDatafn() {
   	 this.apiService.getData().subscribe(data => { 
   	 	console.log(data)
   	 	this.arrayJson = data['statuses'] 
   	 	console.log("this.arrayJson:::"+JSON.stringify(this.arrayJson))
   	 }, error => {
   	 	console.log("error in fetching the response")
   	 }) 
   }

   autoRefresh(){

   }

   ngOnInit(){
   	 this.getDatafn()
    } 

    onClickGo(name,value){
    	console.log(name)
    	console.log(value)
    }
}