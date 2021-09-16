import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    constructor(private AppService:AppService) {}

    task :any;

    ngOnInit(){
        this.AppService.getAip().subscribe(result => {this.task = result;console.log('result', result);})
    }

}
