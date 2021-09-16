import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AlertModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { OrderByPipe } from './image/shared/sort.pipe';

import { ImageDetailComponent } from './image/image-detail.component';
import { appRoutes } from '../routes';
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    OrderByPipe,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AppService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
