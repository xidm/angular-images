
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { AppService } from '../app.service';

@Component({
    selector: 'image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

    apiResponse:any; 
    task:any;

    constructor(
        private route: ActivatedRoute,
        private location: Location,private AppService:AppService) {
            this.AppService.getAip().subscribe(result => {this.apiResponse = result})         
        }

    ngOnInit() {
        this.task = this.route.snapshot.params['id'];
    }

    goBack(): void {
        this.location.back();
    }

}