import { Injectable, OnInit } from '@angular/core';
// import { AppService } from './app.service';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppService{
  apiUrl = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http : HttpClient) {}

  getAip(){
      return this.http.get(this.apiUrl);;
  }

}

