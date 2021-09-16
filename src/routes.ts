
import { Routes } from '@angular/router';
import { PageComponent } from './app/page/page.component';
import { ImageDetailComponent } from './app/image/image-detail.component';

export const appRoutes: Routes = [
    { path: "page", component: PageComponent},
    { path: "image/:id", component: ImageDetailComponent},
    { path: "", redirectTo: "page", pathMatch: 'full'}
]