
import { Component } from "@angular/core";
import { AppService } from '../app.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent {

    apiResponse:any;    
    startPage:number = 0
    ByID:boolean = false;
    lastPage:number = 100;

    constructor(private AppService: AppService) {
        this.AppService.getAip().subscribe(result => {this.apiResponse = result; console.log({result});});
    }

    SortMe(){
      this.ByID = !this.ByID;
      return this.ByID;
    }

    delete(id:number){
        return this.apiResponse = this.apiResponse.filter(img => img.id != id)
    }

    goBack(){
        this.lastPage = (this.startPage);
        this.startPage = (this.startPage - 100);
    }

    goNext(){
        this.startPage = (this.lastPage);
        this.lastPage = (this.startPage + 100);
    }


    // counterAA(num){
    //     let counter=0;
    //     return function(){
    //         counter+=num;
    //         console.log("counter",counter)
    //     }
        
    // }

}